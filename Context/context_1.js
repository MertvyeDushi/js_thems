/**
 * В JavaScript this является «свободным», его значение вычисляется в момент вызова метода
 * и не зависит от того, где этот метод был объявлен, а зависит от того, какой объект вызывает
 * метод (какой объект стоит «перед точкой»).
 * 
 * https://learn.javascript.ru/object-methods
 */


const coffee = {
	strong: true,

	// Разобраться с контекстом стрелочных функций.
	info: function () {
		console.log(this)
		console.log(`The coffee is ${ this.strong ? '' : 'not ' }strong`)
	},
}

this.strong = false

console.log(coffee)

coffee.info.call(coffee)
