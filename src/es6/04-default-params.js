function newUser(name, age, country) {
  var name = name || "Pedro";
  var age = age || 35;
  var country = country || 'MX';
  console.log (name, age, country);
}

newUser();
newUser("Juan",15,"CO");

function newAdmin (name='Luis', age=34, country ='CL'){
  console.log (name, age, country);
}
newAdmin();
newAdmin("Janice",25,"EC");