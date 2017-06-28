$('#submit').on('click', function userPicRequest(){
  var userInput = document.querySelector('input').value;

  var picCheck = userInput.search('send' && 'pic' || 'picure');

  if (picCheck > -1){
    var time = 500;
      setTimeout(function buttersSendsPic(){
        var buttersLines = ['Oh you want a picture? Okay, let me get my good side', 'Mom says I am handsome', 'You should follow my instagram: butters.chillin', 'Ready for my closeup'];
        var buttersPicWords = buttersLines[Math.floor(Math.random()*buttersLines.length)];
        var buttersPicLi = document.createElement('LI');
        var chatList = document.getElementById('chatList');

        buttersPicLi.append(buttersPicWords);
        chatList.append(buttersPicLi);
        buttersPicLi.classList.add('buttersResponse');

        buttersPics = ['drButterscotch.jpg', 'IMG_0200.jpg', 'IMG_4272.jpg', 'IMG_5430.jpg', 'IMG_5755.jpg'];
        var pictureName = buttersPics[Math.floor(Math.random()*buttersPics.length)];
        var picAppend = document.createElement('img');
          picAppend.setAttribute("src", "images/" + pictureName);

        // picAppend.append(picture);
        chatList.append(picAppend);
        picAppend.classList.add('buttersResponsePic');
    }, time);
  };
});
