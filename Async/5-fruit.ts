function delay (s) {
	return new Promise( resolve => {
		setTimeout( () => resolve(s), s * 1000 )
	}) 
}

(async () => {
	const getFruit = async (fruit) => {
		const fruits = {
			pineapple: 'Pineapple',
			peach: 'Peach',
			strawberry: 'Strawberry'
		}

		await delay(2.5)

		return fruits[fruit]
	}

	const makeSidr = async () => {
		const fruitsIds = [
			'strawberry',
			'peach',
			'pineapple'
		]

		try {
			const promises = fruitsIds.map( v => getFruit(v) )

			const fruits = await Promise.all(promises)

			// throw 'Broken'

			return fruits

		} catch(err) {
			return new Error(err)
		}
	}

	await makeSidr()
		.then(console.log)
		.catch(console.log)

	console.log('2')
})()

