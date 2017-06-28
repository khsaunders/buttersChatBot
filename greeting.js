var submitBtn = document.getElementById('submit');
var clicks = 0

//USER INITIATES
$('#submit').on('click', function userGreeting(){
  clicks ++
  var userInput = document.querySelector('input').value;
  var userLi = document.createElement('LI');
  var chatList = document.querySelector('#chatList');
  userLi.append(userInput);
  chatList.append(userLi);
  userLi.classList.add('userResponse');

  var greetCheck = userInput.includes('hey' || 'hi' || 'hello' || "what's up");


//BUTTERS GREETING
  if (clicks == 1){
      var time = 500;
      setTimeout(function buttersGreeting(){
      var buttersSaysHi = "Hi! I'm Butters, a cat with access to the internet. You can call me lil B if you want. \n I can send you a picture, I can tell you random facts about me, and I can tell you the weather";
      var buttersLi = document.createElement('LI');
      var buttersChatList = document.querySelector('#chatList');
      buttersLi.append(buttersSaysHi);
      buttersChatList.append(buttersLi);
      buttersLi.classList.add('buttersResponse');
      }, time);
    }
});
