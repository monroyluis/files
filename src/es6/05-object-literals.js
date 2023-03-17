//object literals

function newUser (user,age, country) {
  return {
    user: user;
    age: age;
    country: country;
  }
}

function newUser (user,age, country) {
  return {
    user,
    age,
    country
  }
}

console.log(newUser("lamed", 18, "MX"))