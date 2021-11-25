const config = {
    PORT : process.env.PORT || 3001,
    HOST : process.env.HOST ||'http://127.0.0.1',
    FILES_ROUTER : process.env.FILES_ROUTER  ||'/network' ,
    ACCESS_TOKEN : process.env.ACCESS_TOKEN || 4500791343373570 ,
    API_HEROES : process.env.API || 'https://superheroapi.com/api/'
}

module.exports = config
