const models = require("../models");

exports.shopDetail = async (request, reply) => {
  const {
    rows: results,
    count: totalCount
  } = await models.shops.findAndCountAll({
    attributes: ["id", "name"],
    limit: request.query.limit,
    offset: (request.query.page - 1) * request.query.limit
  });
  console.log("get db datas.");
  // 开启分页的插件，返回的数据结构里，需要带上 result 与 totalCount 两个字段
  reply({ results, totalCount });
};
