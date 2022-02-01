const database = require('./database');

const dataMapper = {

    getAllPokemon: function (callback) {
        const query = {
            text: `SELECT * FROM "pokemon"`
        };
        database.query(query, callback);
    },

    getPokemonInfo: function (id, callback) {
        const query = {
            text: `select * from pokemon,pokemon_type,type 
            where pokemon.numero = pokemon_type.pokemon_numero 
            and pokemon_type.type_id = type.id and pokemon.id = $1`,
            values: [id]
        };
        database.query(query, callback);
    },


    getAllType: function (callback) {
        const query = {
            text: `SELECT * FROM "type"`
        };
        database.query(query, callback);
    },

    getPokemonType: function (type, callback) {
        const query = {
            text: `select pokemon.id, pokemon.nom, pokemon.numero from pokemon,pokemon_type,type 
            where pokemon.numero = pokemon_type.pokemon_numero 
            and pokemon_type.type_id = type.id and type.name = $1`,
            values: [type]
        };
        database.query(query, callback);
    },


}

module.exports = dataMapper;