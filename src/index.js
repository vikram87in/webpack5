import { wizard } from './wizard';
import { getBarbarian } from './barbarian';

console.log('hello from index.js');
console.log('wizard: ', wizard);
console.log('barbarian: ', getBarbarian());

const obj = { a: 'alpha', b: 'bravo' };
const newObj = { ...obj, c: 'cutea' };
console.log(newObj);