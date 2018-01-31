 //服务器的对外接口只有两类，
//一类是接收客户端的请求， 叫做handler， 
//一类是接收RPC请求， 叫做remote，
//handler和remote的行为决定了服务器长什么样子。
//因此我们只要定义好handler和remote两类的行为， 就可以确定这个服务器的类型。

//handler 的接口声明
handler.methodName = function(msg, session, next) {
  // do something
}
//demo:
handler.send = function (msg,session,next) {
    var rid = session.get('rid');
    var username  = session.uid.split('*')[0];
    var channelService = this.app.get('channelService');
    var param = {//数据发送包裹的参数
        msg:msg.content,
        form:username,
        target:msg.target
    };
    channel = channelService.getChannel(rid,false);
    //发送的对象是全体
    if(msg.target == '*'){
        channel.pushMessage('onChat',param);
    }else {//发送的对象是某一个
        var tuid = msg.target + '*' + rid;
        var tsid = channel.getMember(tuid)['suid'];
        channelService.pushMessageByUids('onChat',param,[{
            uid: tuid,
            sid: tsid
        }]);
    }
    next(null,{
        route:msg.route
    })
};

//参数解释
msg  :
  msg.content:
  msg.target
  msg.rid
  msg.username
  
session :
  session.uid
  session.get
  
next:执行完的回调函数


