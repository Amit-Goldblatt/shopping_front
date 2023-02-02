// create a url based on environment
export const BaseUrl = process.env.NODE_ENV === 'heroku' ? 'https://backshoping.herokuapp.com/' : 'http://localhost:8000';
