const axios = require("axios");
const {API_HEROES, ACCESS_TOKEN} = require("../../config");

const API_SEARCH = API_HEROES + ACCESS_TOKEN +'/search/';
const API_ID = API_HEROES + ACCESS_TOKEN + '/';

async function searchHeroes(nameHeroes) {
    let res = await axios.get(API_SEARCH + nameHeroes);
    return res.data;
}

async function searchHeroeForId(idHeroe) {
    let res = await axios.get(API_ID + idHeroe);
    return res.data;
}

module.exports = {
    searchHeroes,
    searchHeroeForId
};