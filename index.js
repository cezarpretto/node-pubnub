var pubnub = require('pubnub')({
    ssl           : true,  // <- enable TLS Tunneling over TCP
    publish_key   : 'pub-c-b3952788-270c-4a33-9ba9-e13373eb99b8',
    subscribe_key : 'sub-c-eef2dadc-0f4c-11e6-a8fd-02ee2ddab7fe'
});

var parameter = JSON.parse(process.argv[2]);
var userA = parameter[0];
var userB = parameter[1]
var i = 0;
var publish = function (channel, match){
  pubnub.publish({
    channel: 'us-' + channel,
    message: match,
    callback: m =>{
      i++;
      if(i < 2){
        publish(userB.id_user, userA);
      }else{
        process.exit()
      }
    }
  });
};

publish(userA.id_user, userB);
