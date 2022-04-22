/**
 *
 *
 * typeof (operador)
 *
 * Array , list, stack? (estructura)
 *
 * object (tipo de dato)
 *
 */

// valido: devolver suma
// invalido: devolver -1
// function sum(a, b) {
//   if (typeof a === 'number' && typeof b === 'number') {
//     return a + b;
//   }
//   return -1;
// }

// function sum(a, b) {
//   if (isNaN(a) || isNaN(b)) {
//     return -1;
//   }
//   return a + b;
// }

function sum(a, b) {
  if (
    !isNaN(a) &&
    typeof a === 'number' &&
    !isNaN(b) &&
    typeof b === 'number'
  ) {
    return a + b;
  }
  return -1;
}

let x = 4;
let y = 'hola que tal';
let w = true;
let z;

// console.log(typeof Number.NaN);

// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof w);
// console.log(typeof z);

// console.log(sum(x, parseInt('hola'))); // -1

// Error
// False
// undefined
// 90hola que tal

//

function mult(a, b) {
  return a * b;
}

let h = 4 + mult(4, 3);

//console.log(h);

let g = [1, null, [1, 2, 3, 99]];

let str = 'holaque tal';
let strA = str.split('');

//console.log(g);
//console.log(strA);

console.log(g[1]);

let arr = g[2];

// console.log(arr[2]);

// console.log(g[2][2]);

function multiple(a, b, c) {
  let totalMul = a * b * c;
  let totalSum = a + b + c;
  return [totalMul, totalSum];
}

console.log(multiple(1, 2, 5));

// let A = ['B', 'MD'];

// console.log(A[1]); // MD  <-- Obteniendo
// console.log(A.length); // 2
// console.log(A);

// A[2] = 'Y';
// console.log(A);

// A.push('F');
// console.log(A);

// A[9] = 'Yosef';
// console.log(A);

// A.pop();
// console.log(A);
