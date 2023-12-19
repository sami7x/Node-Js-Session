/*
//creating new promise
let myPromise = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve("Promise Resolved");
    },3000);
});

//promise giving
myPromise
.then((sucessMessage)=>
{
    //async code here
    console.log(sucessMessage);
})
.catch((errorMessage) => {
    //handle throw error
    console.log(errorMessage);
});
*/



//chaining promise
function samiBajra(){
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve("First");
        },2000);
    });
}


function anupStha(value)
{
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(`${value} Second`);
        });
    });
}

samiBajra()
  .then((result) => anupStha(result))
  .then((finalResult) => {
    console.log(finalResult);
  })
  .catch((error) => {
    console.error("There was an error: ", error);
  });