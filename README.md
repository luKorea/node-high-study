# node-high-study
node高级学习

--文件目录划分
1. app 主入口文件
    index 实例化 koa, 导入 router
    database 实例化数据库连接配置
2. config 全局配置文件
3. controller 控制层
4. middleware 中间层
5. router 路由
6. service 操作数据库层
7. utils 工具类函数
8. main.js 启动文件

-- 公钥私钥生成
```shell
openssl
    genrsa -out private.key 1024
    rsa -in private.key -pubout -out public.key
```
