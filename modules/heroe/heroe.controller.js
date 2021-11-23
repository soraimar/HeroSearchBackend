const axios = require("axios");
const {API_HEROES, ACCESS_TOKEN} = require("../../config");

const API = API_HEROES + ACCESS_TOKEN +'/search/';

async function searchHeroes(nameHeroes) {
    let res = await axios.get(API + nameHeroes);
    return res.data;
}

module.exports = {
    searchHeroes
};