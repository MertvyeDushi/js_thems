const fetch = require('node-fetch')

const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')

promise
	.then( result => result.json() )
	.then( result => {
		throw new Error('You are error')
		// console.log('1 ' + result.title)
	})
	.catch( error => console.error(error) )

console.log('2')
