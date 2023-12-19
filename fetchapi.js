//function to fetch data async/await
//async => first come will be in async (its a compiling process)
//await => waits (later coming will be in await)
async function fetchData(){
    //mummy ko kam (From example)
    try{
        //synchronous code here
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        //parsing the JSON response
        //baba ko kam
        const data = await response.json();
        return data;

    }
    catch(error){
        //handle throw error
        console.log("Erro handling data", error);
        throw(error);
    }
}


//function to display fetched data
function displayData(){ 
    fetchData()
    .then((data)=> {
        console.log("Fetched Data: ", data);
    })
    .catch((error) =>
    {
        console.log("Error in fetching data: ", error);
    })
}


//call the functionto display the fetched data
displayData();
console.log("Fetching Data.....");
