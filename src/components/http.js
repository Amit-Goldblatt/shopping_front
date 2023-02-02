// create a url based on environment
let BaseUrl = '';

if (process.env._ && process.env._.indexOf("heroku") !== -1){
console.log("heroku")

BaseUrl = 'https://backshoping.herokuapp.com/';
}
else 
{
console.log("localhost")
BaseUrl ='http://localhost:8000';
}
export {BaseUrl}
