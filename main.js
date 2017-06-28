counter = 1

$('#submit').on('click', function clearField(){
$('input').val(' ');
counter ++
var userInput = document.querySelector('input').value;

var langCheck = userInput.search('pic' || 'picture' || 'random' || 'hello' || 'hi' || 'hey');

if(langCheck > -1){
  console.log("lil B doesn't understand");
}
});
