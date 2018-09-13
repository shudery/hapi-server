// routes/hello-hapi.js
module.exports = [
  {
    method: "GET",
    path: "/hello",
    handler: (request, reply) => {
      reply("hapi");
    },
    config: {
      tags: ["api", "tests"],
      description: "测试hello-hapi"
    }
  }
];
