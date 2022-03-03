type color = typeof color;
type keyColor = keyof color;

const color = {
  red: 'red',
  green: 'green',
  blue: 'blue',
};

function selectedCor(cor: keyColor, colorOBJ: color) {
  return colorOBJ[cor];
}

console.log(selectedCor('red', color));
