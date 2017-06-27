$('#submit').on('click', function userPicRequest(){
  var userInput = document.querySelector('input').value;

  var picCheck = userInput.search('send' && 'pic' || 'picure');

  if (picCheck > -1){
    var time = 500;
      setTimeout(function buttersSendsPic(){
        var buttersPicWords = "Oh you want a picture? Okay, let me get my good side";
        var buttersPicLi = document.createElement('LI');
        var chatList = document.getElementById('chatList');

        buttersPicLi.append(buttersPicWords);
        chatList.append(buttersPicLi);
        buttersPicLi.classList.add('buttersResponse');
    }, time);
  };
});
