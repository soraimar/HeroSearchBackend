const heroes = require('../modules/heroe/heroe.network');

function router(server){
    server.use('/heroes', heroes);
}

module.exports = router;