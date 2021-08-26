// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82-async-await-%D0%B2-javascript-fe8f04cca415

// EXAMPLES:
/*
const fetch = require('node-fetch')

// На Промисах:

const URL = 'https://jsonplaceholder.typicode.com/posts/1'

fetch(URL)
  .then( response => response.json() )
  .then( data => console.log(data) )


// На Стероидах:

const getData = async (url) => {
	const response = await fetch(url)
	const data = await response.json()

	return data
}

(async () => console.log( await getData(URL) ) )()
*/
// END EXAMPLES BLOCK

const fetch = require('node-fetch')

const URL = 'https://jsonplaceholder.typicode.com/posts/1'

/**
 * yield – не только возвращает результат наружу,
 * но и может передавать значение извне в генератор. Чтобы это сделать, нужно
 * вызвать generator.next(arg) с аргументом. Этот аргумент становится результатом yield,
 * т.е. в response будет записано то, что мы передали на строке (3).
 */

function* generator (url) {
	const response = yield fetch(url) // (1)
	const data = yield response.json() // (2)

	return data
}

const async = (generatorObject, url) => {
	/**
	 * Когда такая функция вызвана generatorObject(url), она не выполняет свой код.
	 * Вместо этого она возвращает специальный объект, так называемый «генератор»,
	 * для управления её выполнением.
	 */
	const generator = generatorObject(url)
	
	const handle = value => {
		/**
		 * При вызове next() запускает выполнение кода внутри генератора до ближайшей
		 * инструкции yield. По достижении yield выполнение функции приостанавливается,
		 * а соответствующее значение – возвращается во внешний код. Результатом метода
		 * next() всегда является объект с двумя свойствами:
		 * 
		 * - value - значение из yield (в нашем случае Промис);
		 * - done - статус выполнения (будет всегда false, если возвращать ч/з yield).
		 */

		const result = generator.next(value)
		// result: { value: Promise { <pending> }, done: false }
		
		/**
		 * Разберемся, что тут происходит.
		 * 
		 * У объекта генератора вызывается метод next(), value === underfined.
		 * На строке (1) генерируется запрос и возвращается Промис. Т.к. стоит ключевое
		 * слово yield, то в этот же момент Промис возвращается во внешнюю функцию,
		 * где происходит ожидание его исполнения, затем запускается снова наша функция
		 * next, в параметрах которой передан Респонс, полученный в Промисе.
		 * Далее на объекте Генератора снова запускается метод next(), value === Респонс.
		 * Выполнения кода начинается уже не с (1) строки, а со (2). Дальше всё понятно.
		 */

		if (result.done) return Promise.resolve(result.value)

		return Promise.resolve(result.value).then( response => handle(response) ) // (3)
	}

	return handle()
}

const result = async(generator, URL)

// async всегда возвращает Промис:
result.then(console.log)