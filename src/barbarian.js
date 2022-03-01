export const wizard = 'wizard-ali'

export function getBarbarian() {
  return 'barbarian-ali from a function';
}

export function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve('hi after two secs') }, 2000);
  })
}