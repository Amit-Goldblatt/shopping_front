// create a url based on environment
let BaseUrl = '';

if (window.location.href.includes('herokuapp.com')) {


    BaseUrl = 'https://backshoping.herokuapp.com';
}
else {

    BaseUrl = 'http://localhost:8000';
}
export { BaseUrl }
