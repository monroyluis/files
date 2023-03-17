//delcase
class User {};

//instancia de una clase
//const newUser = new User ();

class user{
  //metodos
  greeting(){
    return 'hello'
  }
};

const lamed = new user ();
console.log(lamed.greeting);

const bebe1 = new user ();
console.log(bebe1.greeting);

//constructor

class user{
  constructor(){
    console.log('nuevo usuario');
  }
  greeting(){
    return "helloconstructor";
  }
}

const david = new user();
