const express = require('express');
const router = express.Router();
const mainController = require('./controller/mainController');



router.get('/', mainController.homePage);
router.get('/info/:id', mainController.infoPokemon);
router.get('/type/', mainController.type);
router.get('/type/pokemon/:type', mainController.typePokemon);



module.exports = router;