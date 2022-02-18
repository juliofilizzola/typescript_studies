// Condicinal
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Non-null assertion!

const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type Assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';
