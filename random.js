

$('#submit').on('click', function userRandom(){
  var userInput = document.querySelector('input').value;

  var randomCheck = userInput.search('random' || 'tell me something about you');

  if (randomCheck > -1){
    time = 500
      setTimeout(function buttersSendsPic(){
      var buttersFacts = ["I like to put bugs on my mom's pillow", "Sometimes, I wonder what it would be like to have only two legs", "I was born without a tail", "I sit on people's laps when they use the toilet", "I don't like dry food", "I have a cousin named Wolfgang"];

      var fact = buttersFacts[Math.floor(Math.random()*buttersFacts.length)];
      var buttersFactLi = document.createElement('LI');
      var chatList = document.querySelector('#chatList');

      buttersFactLi.append(fact);
      chatList.append(buttersFactLi);
      buttersFactLi.classList.add('buttersResponse');
    }, time);
  }
});
