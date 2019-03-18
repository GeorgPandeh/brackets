module.exports = function check(str, bracketsConfig) {
  const bracketsArr = str.split('');
  let arrLength = bracketsArr.length;
  do {
    for (let i = 0; i < arrLength; i += 1) {
      for (let j = 0; j < bracketsConfig.length; j += 1) {
        if (bracketsArr[i] === bracketsConfig[j][0]) {
          if (bracketsArr[i + 1] === bracketsConfig[j][1]) {
            bracketsArr.splice(i, 2);
          }
        }
      }
    }
    arrLength -= 2;
  } while (arrLength > 1);
  if (bracketsArr.length === 0) {
    return true;
  }
  return false;
};
