var submitBtn = document.getElementById('submit');
var clicks = 0

//USER INITIATES
$('#submit').on('click', function userGreeting(){
  clicks ++
  var userInput = document.querySelector('input').value;
  var userLi = document.createElement('LI');
  var chatList = document.getElementById('chatList');
  userLi.append(userInput);
  chatList.append(userLi);
  userLi.classList.add('userResponse');


//BUTTERS GREETING
  if (clicks == 1){
      var time = 500;
      setTimeout(function buttersGreeting(){
      var buttersSaysHi = "Hi! Are you my mom? I don't like anyone who isn't my mom";
      var buttersLi = document.createElement('LI');
      buttersLi.append(buttersSaysHi);
      chatList.append(buttersLi);
      buttersLi.classList.add('buttersResponse');

      console.log(buttersSaysHi);

      console.log("Butters says Hi");
    }, time);
  }

});
