/*  eslint-disable */
function showMessage(msg: any) {
  // => não apresente o tipo any, o codigo vai dar error.
  return msg;
}

console.log(showMessage('xabalu'));
console.log(showMessage({ xabalu: 'xabalu' }));
console.log(showMessage(['xabalu']));
console.log(showMessage(1));
