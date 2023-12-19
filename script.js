/*
//function that takes a callback as a parameter
function greet(name , callback)
{
    console.log(`Helo ${name}`);
    callback();
}

//callback function
function sayGoodbye(){
    console.log("Goodbye");
}

//calling the greet function 
//and passing the sayGoodbye function as an argument
greet("Anoop Shrestha",sayGoodbye); 
*/



//Another example of calling function using setTimeout
function fetchData(callback){
   setTimeout(function() {
            const data = {id:1, name:"Anoop Shrestha"};
            callback(data);
        },3000);

}

    //callback function to handle fetched data
    function displayData(data){
        console.log("Recieved", data);
    }

    fetchData(displayData);
    console.log("Fetching data...");


