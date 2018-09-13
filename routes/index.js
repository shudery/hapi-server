const helloHapi = require("./hello-hapi");
const shop = require("./shop");
const order = require("./order");

module.exports = [...helloHapi, ...shop, ...order];
