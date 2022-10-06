function reverseString(str) {
  if (str.length === 1) return str;
  let lastChar = str[str.length - 1];
  let remain = str.slice(0, -1);
  return lastChar + reverseString(remain);
}
