function* iterate(array) {
  for (let value of array){
    yield value;
  }
}

const it = iterate(["Ivan", 'Pedro', 'Juan', 'John', 'Maria']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);