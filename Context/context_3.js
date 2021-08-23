class Coffee {
  constructor(strong) {
   this.strong = !!strong
  }

  info() {
    console.log(`This coffee is ${this.strong ? '' : 'not '}strong`)
  }
}

const strongCoffee = new Coffee(1488)
const normalCoffee = new Coffee('')

strongCoffee.info() // This coffee is strong
normalCoffee.info() // This coffee is not strong