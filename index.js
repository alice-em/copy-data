const copyArray = (array) => {
  const i = [].slice.call(array);
  return i;
};

const copyFunction = (func) => {
  const i = func.bind({});
  return i;
};

const copyObject = (obj) => {
  const i = Object.assign({}, obj);
  return i;
};

const copyString = (string) => {
  const i = string.slice(0);
  return i;
};

const copy = {
  array: copyArray,
  func: copyFunction,
  object: copyObject,
  string: copyString
};

export default copy;
