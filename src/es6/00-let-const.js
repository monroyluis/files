var lastname ="Peterson";
lastname = "Sonpet";
console.log(lastname)

let fruit = "apple";
fruit = "kiwi";
console.log(fruit)

const animal = "dog";
animal = "cat";
console.log(animal)

const fruits = () =>{
  if (true)
  {
    var fruit1 = "apple"; //function scope
    let fruit 2 = "kiwi"; // block scope
    const fruit3 = "banana"; //block scope
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}

fruits()