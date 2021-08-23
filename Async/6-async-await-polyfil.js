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

function* generator (url) {
	const response = yield fetch(url)
	const data = yield response.json()

	console.log(data)
}

const async = (generatorObject, url) => {
	const generator = generatorObject(url)
	
	const next = value => {
		const result = generator.next(value)
		
		if (result.done) return result.value
		else result.value.then(next)
	}

	next()
}

console.log(async(generator, URL))