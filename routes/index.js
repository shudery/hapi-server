const helloHapi = require("./hello-hapi");
const shop = require("./shop");
const order = require("./order");
const user = require("./user");

module.exports = [...helloHapi, ...shop, ...order, ...user];
