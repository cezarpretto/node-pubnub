var pubnub = require('pubnub')({
    ssl           : true,  // <- enable TLS Tunneling over TCP
    publish_key   : 'pub-c-b3952788-270c-4a33-9ba9-e13373eb99b8',
    subscribe_key : 'sub-c-eef2dadc-0f4c-11e6-a8fd-02ee2ddab7fe'
});
pubnub.publish({
  channel: 'us-1',
  message: JSON.parse(process.argv[2]),
  callback: m =>{
    console.log(m);
    process.exit()
  }
});

// process.argv.forEach(function (val, index, array) {
//   console.log(index + ': ' + val);
// });
