  
module.exports = function check(str, bracketsConfig) {
  const newStr = str.split('');
  const storage = [];
  const openBrackets = [];
  const closeBrackets = [];
  brackets = {};
  if (Array.isArray(bracketsConfig[0])) {
    bracketsConfig.map((item) => {
      openBrackets.push(item[0]);
      closeBrackets.push(item[1]);
      brackets[item[1]] = item[0];
    });
  } else {
    openBrackets.push(bracketsConfig[0]);
    closeBrackets.push(bracketsConfig[1]);
  }

  for (let i = 0; i < newStr.length; i++) {
    if (openBrackets.includes(newStr[i])) {
      if (closeBrackets.includes(newStr[i])) {
        if (newStr[i] === storage[storage.length - 1]) {
          storage.pop();
        } else storage.push(newStr[i]);
      } else storage.push(newStr[i]);
    } else if (brackets[newStr[i]] === storage[storage.length - 1]) {
      storage.pop();
    } else return false;
  }
  return storage.length === 0;
};
