// array viene considerato come un obj
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var nome = 'Ralph';
var nomeArr = ['R', 'a', 'l', 'p', 'h' ];

var fruttaSecca = ['noccioline', 'anacardi'];
var fruttaTropicale = ['ananas', 'mango', 'cocco'];

// merging
var frutte = fruttaSecca.concat(fruttaTropicale);
//frutte = Array.concat(fruttaSecca, fruttaTropicale);
frutte = fruttaSecca + fruttaTropicale;
frutte = [...fruttaSecca, ...fruttaTropicale]; // ['noccioline', 'anacardi', 'ananas', 'mango', 'cocco']

document.getElementById('toStringDiFrutta').innerHTML = '|' + frutte.toString() + '|';
document.getElementById('frutta').innerHTML = frutte;


var primoElemento = 5;
var secondoElemento = '5';

// ...
var points = ['40', '100', '1', 'ciao', '5', '25', '10']; 
var points2 = [
    40,
    { a: 1 },
    1,
    5,
    25,
    10
];


document.getElementById('points').innerHTML = points.sort();
document.getElementById('points2').innerHTML = points2.sort();

points.findIndex('ciao') // 3
points.join() // '40, 100, 1, ciao, 5, 25, 10'
points.join('-') // '40-100-1-ciao-5-25-10'

// Math.min() // -Infinity

var numbers = [1, 5, 10, 15];
var number2 = [1, 5, 10, 15];
var roots = numbers.map(
    function(x, index) {
        console.log(index);
        return x * 2;

        console.log('asdasd');
    }
);


roots = [];
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    roots.push(element * 2);
}
//  [1, 5, 10, 15];
var primoValore = numbers.shift(); // 1
console.log(numbers);
// [5, 10, 15];
// [10, 15];

// .....
//  [1, 5, 10, 15];
let ultimoValore = numbers.pop(); // 15
// numbers [1, 5, 10]

// []
numbers.pop() // undefined
// numbers []

let pgreco = 3.14;
    pgreco = new Number(3.14)

// [ 1, 2, 3, 4]
numbers.unshift(5);
// [5, 1, 2, 3, 4] number

numbers.push(6);
// [5, 1, 2, 3, 4, 6]
