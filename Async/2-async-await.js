const f = async () => {

  const promise = new Promise( resolve => setTimeout( () => resolve('Schulz'), 1000 ) )

  const result = await promise

  console.log(result)
}

f()

console.log('test')