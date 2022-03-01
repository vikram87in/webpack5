
import { wizard, getBarbarian, getData } from './barbarian';
import './css/style.scss';

// import from other file example
console.log('wizard: ', wizard);
console.log('barbarian: ', getBarbarian());

// object/array spread example
const obj = { a: 'alpha', b: 'bravo' };
const newObj = { ...obj, c: 'cutea' };
console.log(newObj);

const arr = [1, 23, 3];
const arr1 = [...arr, 5];
console.log(arr1);

// includes example
console.log([1, 2, 3].includes(2));

// async-await and promise example
getAPIData();

// object.values example
const objj = { a: 1, b: 3 };
console.log(Object.values(objj));

async function getAPIData() {
  console.log('before promise:');
  const result = await getData();
  console.log(`after promise: ${result}`);
}
