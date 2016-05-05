var pubnub = require('pubnub')({
    ssl           : true,  // <- enable TLS Tunneling over TCP
    publish_key   : 'pub-c-b3952788-270c-4a33-9ba9-e13373eb99b8',
    subscribe_key : 'sub-c-eef2dadc-0f4c-11e6-a8fd-02ee2ddab7fe'
});

pubnub.subscribe({
  channel: 'us-1',
  message: m => {
    console.log('channel1');
    console.log(m);
  }
});

pubnub.subscribe({
  channel: 'us-2',
  message: m => {
    console.log('channel2');
    console.log(m);
  }
});
