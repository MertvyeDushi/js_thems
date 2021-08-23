// Получит ли функция доступ к последним изменениям переменной name?

let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi();