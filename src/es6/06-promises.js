const anotherFunction = () => {
  return new Promise((resolve, reject)=> {
    if (true){
      resolve("Funciona");
    }else{
      reject("opss no sirve");
    }
  })
}

anotherFunction()
.then(response => console.log(response))
.catch(error=>console.log(error));



const promesa = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      //true o false
      resolve("Se ha resuelto la promesa")
    } else {
      reject("Se ha rechazado la promesa")
    }
  })
}

promesa()
  .then(respuesta => console.log(respuesta)) //En caso que se ejecute resolve
  .catch(error => console.log(error)); //En caso que se ejecute reject