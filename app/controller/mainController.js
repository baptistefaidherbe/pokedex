const dataMapper = require('../dataMapper.js');

const mainController = {
  homePage: (req, res) => {
    dataMapper.getAllPokemon( (err, results) => {
      if(err) {
        console.error(err);
        return;
      } 
      res.render('home', {
        pokemons: results.rows
       
      })
    });
  },

  infoPokemon: (req, res) => {
    const id = req.params.id;

    dataMapper.getPokemonInfo(id, (err, results) => {
      if(err) {
        console.error(err);
        return;
      } 

      console.log(results.rows[0].pv/255*100)
      res.render('info', {
        info: results.rows[0],
        types:results.rows,
        stat:results.rows[0].pv/255*100,
        attaque:results.rows[0].attaque/255*100,
        defense:results.rows[0].defense/255*100,
        attaque_spe:results.rows[0].attaque_spe/255*100,
        defense_spe:results.rows[0].defense_spe/255*100,
        vitesse:results.rows[0].vitesse/255*100,
       
      })
    });
  },

  type: (req, res) => {
    dataMapper.getAllType( (err, results) => {
      if(err) {
        console.error(err);
        return;
      } 
      res.render('type', {
        types: results.rows
       
      })
    });
  },

  typePokemon: (req, res) => {
    const type = req.params.type;
    dataMapper.getPokemonType(type, (err, results) => {
      if(err) {
        console.error(err);
        return;
      } 

      console.log(results.rows)
      res.render('home', {
        pokemons: results.rows
       
      })
    });
  },

}

module.exports = mainController;