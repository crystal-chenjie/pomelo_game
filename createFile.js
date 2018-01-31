//引用其他文件
var chatRemote  = require('../remote/chatRemote');

//定义新板块 并将板块暴露出去
module.exports = function (app) {
    return new  Handler(app);
};
var Handler = function (app) {
    this.app  = app;
};
//在该模块的原型链上 添加函数
var handler = Handler.prototype;
