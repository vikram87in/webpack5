import { wizard, getBarbarian } from './ts-barbarian';

console.log('wizard: ', wizard);
console.log('barbarian: ', getBarbarian());

console.log([1, 2, 3].includes(2)); 
const obj = { a: 'alpha', b: 'bravo' };
const newObj = { ...obj, c: 'cutea' };
console.log(newObj);
const arr = [1, 23, 3];
const arr1 = [...arr, 5];
console.log(arr1);
