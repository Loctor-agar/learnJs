'use strict'
function randomNumber(){
  let randomsNumber = Math.floor(Math.random () * 101);
console.log(randomNumber);
console.log(randomsNumber);
  function bot(){
    let number = prompt("Угадай число от 1 до 100","");

    if (number < 0 || number > 100 ) {
			alert("Неверный диапозон");
			return bot();
		} 
    if(isNaN(number) || number.trim() === ''){
      alert("Введи число!");
      return bot();
    } else if (number > randomsNumber){
      alert("Загаданное число меньше");
      return bot();
    } else if (number < randomsNumber){
      alert ("Загаданное число больше");
      return bot();
    } else if (number === null){
      alert ("Игра окончена");
    } else if (number == randomsNumber){
      alert("Поздравляю, Вы угадали!!!");
    }
  }
  bot();
}
randomNumber();
