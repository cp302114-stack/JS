const URL = "https://api.thecatapi.com/v1/breeds/abys";

const getfacts = async () =>{
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response);
};