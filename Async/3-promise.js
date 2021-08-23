/**
 * Ждёт ли коллбэк промиса освобождения полного колл-стека
 * или выполняется сразу после завершения текущей задачи?
 */

console.log('1')

setTimeout( _ => console.log('2'), 0 )

Promise.resolve('3').then( value => console.log(value) )

console.log('4')

// RESULT: 1-4-3-2