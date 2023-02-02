// create a url based on environment
let BaseUrl = '';

if (window.location.href.includes('herokuapp.com')){
console.log("heroku")

BaseUrl = 'https://backshoping.herokuapp.com/';
}
else 
{
console.log("localhost")
BaseUrl ='http://localhost:8000';
}
export {BaseUrl}
