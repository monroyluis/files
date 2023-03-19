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
.catch(error=>console.log(error))
.finally(()=>console.log('Finally'));


