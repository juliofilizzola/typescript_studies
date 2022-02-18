/* eslint-disable */
let x = 10;
// o Typescritp inferiu a variavel x como number por isso podemos modificar ela para qualquer valor de numero, mas não podemos mudar para uma string, por exemplo

x = 100;

x = 'xablau';

const y = 10; // o typeScript inferiu para um tipo literal (no caso o tipo 10)
