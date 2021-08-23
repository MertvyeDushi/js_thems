'use strict';

/**
 * Промисы - объект, инстанс класса Promise, который собой символизирует результат. Результата ещё нет, но символический объект - есть.
 * У этого объекта может быть состояние, оно может переключаться: из pending в одно из двух. Или fullfiled, или rejected.
 * После того, как оно переключилось, переключение снова невозможно.
 * 
 * Промис внутри может хранить значение, которое ему передано, может хранить ошибку и состояние, а также вызывать обработчики,
 * которые ему тоже переданы.
 */

// Pending

// const promise1 = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('value1');
//   }, 0);
// });
// console.dir({ promise1 }); // Promise { <pending> }
// promise1.then(console.log); // 'value1' (delayed)


// Promise.resolve

const promise4 = Promise.resolve('value4');
console.log({ promise4 }); // Promise { 'value4' }
promise4.then(console.log); // 'value4'