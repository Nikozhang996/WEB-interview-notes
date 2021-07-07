# Linux

> linux 为内核统称，其实现在所熟悉的“Ubuntu，CentOS，Red”为发行版

## 1、安装与配置

- 直接安装到硬盘
- 虚拟机安装
- 购买云服务自带安装

#### Windows 与 Mac 连接服务器

阿里云：==120.78.197.182==

Windows 中下载 XShell 校园版：https://51.ruyo.net/test/download_xshell_xftp.html

### 2、基础知识

#### 2-1：目录结构

![image](https://www.runoob.com/wp-content/uploads/2014/06/d0c50-linux2bfile2bsystem2bhierarchy.jpg)

- /bin，二进制文件目录，bin 是 Binaries (二进制文件) 的缩写
- /boot，启动文件
- /dev，设备文件
- /etc，系统配置文件
- /home，家目录
  - /alice
  - /bob
  - /eve
- /root，系统管理员目录，root 用户目录
- /run，是一个临时文件系统，存储系统启动以来的信息。当系统重启时，这个目录下的文件应该被删掉或清除。如果你的系统上有 /var/run 目录，应该让它指向 run。
- /sbin，
- /tmp，临时文件目录
- /usr， usr 是 unix shared resources(共享资源) 的缩写，这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于 windows 下的 program files 目录。
  - /tmp
  - /sbin
  - /local
  - /bin
- /var，系统上跑了很多程序，那么每个程序都会有相应的日志产生，而这些日志就被记录到这个目录下，具体在 /var/log 目录下，另外 mail 的预设放置也是在这里。
  - /tmp
- /bin, /sbin, /usr/bin, /usr/sbin: 这是系统预设的执行文件的放置目录，比如 ls 就是在 /bin/ls 目录下的。值得提出的是，/bin, /usr/bin 是给系统用户使用的指令（除 root 外的通用户），而/sbin, /usr/sbin 则是给 root 使用的指令。

#### 2-2：文件与文件夹操作指令

Linux 是多用户操作系统，所以可以建立多个用户并分配不同的权限。为了保护系统的安全性，Linux 系统对不同的用户访问同一文件（包括目录文件）的权限做了不同的规定。

##### 参考资料：

- https://www.jianshu.com/p/dde6a01c4094

#### 2-3：用户、群组与权限管理

在 Linux 中我们通常使用以下两个命令来修改文件或目录的所属用户与权限：

- chown (change ownerp) ： 修改所属用户与组。
- chmod (change mode) ： 修改用户的权限。

#### 2-4：Nano 文本编辑器与终端配置

### 3、进阶

### 4、远程链接与 SSH

### 5、文本编辑与版本控制

### 6、网络安全

### 7、Shell 脚本

### 8、管理服务器与服务

### 9、配置相关开发环境

#### 9-1：配置 JAVA 环境

#### 9-2：配置 Jenkins

#### 9-3：Nginx

#### 9-4：Apache

#### 9-5：Squid 代理缓存服务器

#### 9-6：Docker

#### 9-7：LNMP

#### 9-8：救援模式

#### 9-9：Zabbix

### 10、内存与磁盘管理
