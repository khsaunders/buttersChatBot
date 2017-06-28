$('#submit').on('click', function userPicRequest(){
  var userInput = document.querySelector('input').value;

  var weatherCheck = userInput.search('weather' || 'temperature');

  if (weatherCheck > -1){
    var time = 500;
      setTimeout(function buttersSendsPic(){
        var buttersWeatherReport = "I don't know what weather is yet. I'm only little and don't go outside. The computer has to show me."
        var buttersWeatherLi = document.createElement('LI');
        var chatList = document.querySelector('#chatList');

        buttersWeatherLi.append(buttersWeatherReport);
        chatList.append(buttersWeatherLi);
        buttersWeatherLi.classList.add('buttersResponse');
    }, time);
  };
});
