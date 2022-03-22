function decoradorParamMethod(
  classPrototype: any,
  nameMethod: string,
  indexMethod: number,
): any {
  console.log('PARÂMETRO DE MÉTODO');
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(indexMethod);
  console.log('###');
}

export default decoradorParamMethod;
