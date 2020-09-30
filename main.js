// Using axios
// Create a function (up to you what you name it)
// Use this as your url 'https://api.publicapis.org/entries'
// First with promises then with async await
// after you get your data, limit the data to the first 20 choices
// if Cors is 'yes' log Description
// if Cors is 'unknown' log Link 

const axios = require('axios');
const url = 'https://api.publicapis.org/entries';

function axiosGet(url) {
    axios.get(url)
    .then(({data}) => data.entries.slice(0, 20))
    .then((newData) => newData.forEach(({Description, Cors, Link}) => {
        Cors === 'yes' ? console.log(Description) : console.log(Link)
    }))
    .catch((err) => console.log(err))
}
// axiosGet(url);

async function axiosGet2(url) {
    try {
        const response = await axios.get(url);
        const data = await response.data;
        const info = await data.entries
        .slice(0, 20)
        .forEach(({Description, Cors, Link}) => Cors === 'yes' ? console.log(Description) : console.log(Link));
    } 
    catch(err) {
        console.log(err);
    }
};
axiosGet2(url);