var Speakable = require('./node-speakable.js');
//var API_KEY = process.env.GKEY;

// Setup google speech
var speakable = new Speakable({
    key: 'AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw'
}, {
    threshold: 1
});

speakable.on('speechStart', function() {
  console.log('onSpeechStart');
});

speakable.on('speechStop', function() {
  console.log('onSpeechStop');
  speakable.recordVoice();
});

speakable.on('speechReady', function() {
  console.log('onSpeechReady');
});

speakable.on('error', function(err) {
  console.log('onError:');
  console.log(err);
  speakable.recordVoice();
});

speakable.on('speechResult', function(spokenWords) {
  console.log('onSpeechResult:')
  console.log(spokenWords);
});

speakable.recordVoice();
