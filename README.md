# 基于 hapi 的 web server

技术栈：node + hapi + sequelize + mysql + joi

> hapi 与 express：Express 的设计初衷，在于其自身的极简特性。通过在 HTTP 顶层为开发者提供极少量的 API，开发者们可以在添加其他功能方面保持独立和自己的偏好，但也变相提升开发者对第三方插件的辨别与学习成本。而 hapi 具有丰富的官方功能集，带来相对一致化的开发体验。并通常通过配置 options 来暴露，而不需要编写逻辑代码。

使用 hapi，更加哈皮。

## 目录结构

```
hapi-server
├── config                                  // 配置文件
├── controller                              // 路由控制器
├── migrations                              // 数据库表结构管理
├── models                                  // 数据模型
├── node_modules                            // npm依赖包
├── plugins                                 // hapi插件
│   ├── hapi-auth-jwt2.js                   // JWT用户鉴权
│   ├── pagination.js                       // 分页
│   └── swagger.js                          // swagger文档
├── routes                                  // 路由
├── seeders                                 // 数据库初始化数据
├── utils                                   // 工具函数
├── .env                                    // 本地配置
├── .env.expamle                            // 配置文件
├── .gitignore                              // git watch配置
├── app.js                                  // 服务启动入口
├── LICENSE                                 // 项目许可证
├── package.json                            // package.json
└── README.md                               // 项目说明
```

## 工具说明

- mysql v5.7.23：数据库
- sequelize-cli：初始化 mysql 表结构，表数据。
- sequelize：Node 的 ORM 工具，完成 mysql 的 CRUD 操作。
- swagger：API 管理

### TIPS

> 初始化数据库数据 sequelize db:seed:all 需要事先执行 `ALTER TABLE TABLE_NAME CONVERT TO CHARACTER SET utf8mb4;` 才能正确存储中文字符
