function decorator(
  classPrototype: any,
  nameMethod: string,
  descriptor: PropertyDescriptor,
): any {
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(descriptor);
  return {
    writable: false,
  };
}

export default decorator;
