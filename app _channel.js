var ChatRemote = function(app) {  
    this.app = app;  
    this.channelService = app.get('channelService');  
    channelService.pushMessageByUids('onChat', param, [{  
            uid: tuid,  
            sid: tsid  
        }]);
    var channel = this.channelService.getChannel(name, flag);
    
    var param = {  
        route: 'onLeave',  
        user: username  
    };  
    users = channel.getMembers();  
    channel.leave(uid, sid);  
    channel.pushMessage(param);  //向全体广播消息
    channel.pushMessage('onChat', param)//向指定区域内的全体广播消息
   
}; 
