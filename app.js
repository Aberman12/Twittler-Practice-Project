$(document).ready(function(){
  var twitRoom = $('#twitRoom');
  var $body = $('body');
var addTwits = ()=>{
  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div></div>');
    var getUser = $('<a onClick="change(event);"></a>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + tweet.created_at);
    $tweet.attr('class', 'tweets');
    $tweet.attr('id', tweet.user);
    $tweet.appendTo(getUser);
    getUser.appendTo(twitRoom);
    index -= 1;

  }

}


  $('#twitButton').click(function(){
var firstTwits = streams.home.length;
console.log(firstTwits);
    generateRandomTweet();
    addTwits();
    while(twitRoom.firstChild){
      twitRoom.removeChild(twitRoom.firstChild);
    }
    streams.home = [];
  });
    addTwits();
});
