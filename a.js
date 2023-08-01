let a = [];

for (let givenNumber of input) {
  let n = 1;
  let length = 1;
  while (n % givenNumber != 0) {
    n = ((n * 10) % givenNumber) + (1 % givenNumber);
    length++;
  }
  a.push(length);
}
console.log(a.join('\n'));
