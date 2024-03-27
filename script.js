let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Hello Devloper");
        resolve()
    },1000)

});
promise.then(()=>{
    console.log("Task Comleted");
})



let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Second promise-------->");
      resolve({name:"Saurabh Kori",age:"22",city:"Pratapgarh"})
    },2000)
}).then((user)=>{
 console.log(user)
})



new Promise((resolve,reject)=>{
    console.log("I am third Promise");
    let error=true;
    if(!error){
        resolve({name:"Raju" ,age:"40",city:"Kanpur"})
    }else{
        reject("Error")
    }
}).then((user)=>{
    console.log(user);
}).catch((error)=>{
   console.log(error);
})

//achive promise by asyn and await
let promise4=new Promise((resolve,reject)=>{
    let error=false;
    if(!error){
        resolve({name:"Shyam",age:"100000"})
    }else{
        reject("Error")
    }
})
let ay= async()=>{
    try{
        console.log("I am forth Promise")
        let data=await promise4
        console.log(data)
    }catch(error){
        console.log(error)
    }
 

}
ay();
 
let getalluser=async()=>{
    try{
        console.log("promise 5----------");
  let response=await  fetch('https://jsonplaceholder.typicode.com/users')
  let data =await response.json()
  console.log(data);
    }catch(error){
        console.log("E:");
    }
}
getalluser();
  fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    console.log("pomise fifth---------------->")
     console.log(response)
  })