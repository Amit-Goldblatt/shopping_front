// create a url based on environment
let BaseUrl = '';
if (process.env._ && process.env._.indexOf("heroku") !== -1){


BaseUrl = 'https://backshoping.herokuapp.com/';
}
else 
{
BaseUrl ='http://localhost:8000';
}
export {BaseUrl}
