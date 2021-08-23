const user = {
  firstName: 'Вася',
	lastName: 'Statcham',
  
	sayHi: function () {
    console.log(`Привет, ${ this.firstName } ${ this.lastName }!`)
  }
}

// let editedUser = Object.assign(user)

setTimeout( user.sayHi, 1000 )

// Привязка контекста с помощью bind:
setTimeout( user.sayHi.bind(user), 1000 )

// Замыкание: функция вызвана на объекте user.
setTimeout( () => user.sayHi(), 1000 )

user.sayHi()

user.firstName = 'Алёша'
user.sayHi = function() {
	console.log(`${ this.firstName }! *****, У!`)
}
user.lastName = 'Привязка через bind не гарантирует,\nчто примитивные свойства объекта останутся неизменными.\nНе изменяются только ссылочные.'
