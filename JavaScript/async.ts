interface ITask {
    key: string | number;
    timeout: number;
    taskCallback: Function;
  }
  export default class AsyncTaskQueueExecutor {
    countExecuteTime: number = 0; // 累计执行时长
    countPauseTime: number = 0; // 累计暂停时长
    pauseTime: number = 0; // 暂停时间
    currentTask: ITask; // 当前任务
    currentTaskExecutor: NodeJS.Timeout; // 当前定时器执行函数
    queue: ITask[] = []; // 任务队列
  
    constructor(taskQueue: ITask[] = []) {
      const firstTask = taskQueue.shift();
      this.pauseTime = firstTask.timeout;
      this.currentTask = firstTask;
      this.queue = taskQueue;
  
      this.countExecuteTime += firstTask.timeout;
      this.currentTaskExecutor = this.createTaskCallback(
        firstTask.taskCallback,
        firstTask.timeout
      );
    }
  
    /**
     * createTaskCallback
     * 创建异步任务队列，执行完后清除当前任务，写入下一任务
     * */
    createTaskCallback(callback: Function, timeout: number) {
      return setTimeout(() => {
        callback();
        if (this.queue.length === 0) return;
        clearTimeout(this.currentTaskExecutor);
        const nextTask = this.queue.shift();
        this.currentTask = nextTask;
        this.currentTaskExecutor = this.createTaskCallback(
          nextTask.taskCallback,
          nextTask.timeout - this.countExecuteTime
        );
        this.countExecuteTime += nextTask.timeout;
        // this.countPauseTime += nextTask.timeout;
      }, timeout);
    }
  
    /**
     * pause
     * 暂停任务
     * */
    pause() {
      this.pauseTime = new Date().getTime();
      clearTimeout(this.currentTaskExecutor);
    }
    /**
     * start
     * 启动任务
     * */
    start() {
      const nowTime = new Date().getTime();
      // 叠加累计暂停时间
      const countPauseTime = nowTime - this.pauseTime;
      this.countPauseTime += countPauseTime;
  
      // 当前任务
      const {
        taskCallback: currentTaskCallback,
        timeout: currentTaskTimeout,
      } = this.currentTask;
  
      // 如果离开时长大于当前任务的timeout，则清除当前task，注册下一task
      if (nowTime - this.countPauseTime > currentTaskTimeout) {
        const getNextTask = (task: ITask): ITask | undefined => {
          if (typeof task === "undefined") return undefined;
          if (task && nowTime - this.countPauseTime > task.timeout) {
            clearInterval(this.currentTaskExecutor);
            if (this.queue.length !== 0) {
              return getNextTask(this.queue.shift());
            }
          } else {
            return task;
          }
        };
  
        console.log(this.queue);
        console.log(this.countPauseTime);
        console.log(this.currentTask);
  
        if (this.queue.length !== 0) {
          const nextTask = getNextTask(this.currentTask);
          console.log(nextTask);
          if (typeof nextTask === "undefined") return;
  
          console.log(`lost ${nextTask.timeout}`);
          this.currentTask = nextTask;
          this.currentTaskExecutor = this.createTaskCallback(
            nextTask.taskCallback,
            nextTask.timeout - this.countExecuteTime
          );
        }
      } else {
        this.currentTaskExecutor = this.createTaskCallback(
          currentTaskCallback,
          currentTaskTimeout - this.countExecuteTime
        );
      }
    }
  }
  
  const taskQueue: ITask[] = [
    {
      key: 1,
      timeout: 0,
      taskCallback() {
        console.log(1);
      },
    },
    {
      key: 2,
      timeout: 2000,
      taskCallback() {
        console.log(2);
      },
    },
    {
      key: 5,
      timeout: 3000,
      taskCallback() {
        console.log(5);
      },
    },
  ];
  
  const instance = new AsyncTaskQueueExecutor(taskQueue);
  
  setTimeout(() => {
    instance.pause();
  }, 1500);
  
  setTimeout(() => {
    instance.start();
  }, 2500);
  
  // 3000
  