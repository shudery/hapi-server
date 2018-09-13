// 读取环境配置数据
require("env2")(__dirname + "/.env");
const config = require("./config");
const Hapi = require("hapi");
const routes = require("./routes/");
const swaggerPlugin = require("./plugins/swagger");

const server = new Hapi.Server();
// 配置服务器启动 host 与端口
server.connection({
  port: config.port,
  host: config.host
});

const init = async () => {
  await server.register([...swaggerPlugin]);
  server.route([...routes]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();
