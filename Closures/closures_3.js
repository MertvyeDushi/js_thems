function User(name) {

	console.log(this)

  this.sayHi = function() {
    console.log(name);
  };

	console.log(this)
}

console.log('До создания нового экземляра')

let user = new User("John");

console.log('После')

user.sayHi();