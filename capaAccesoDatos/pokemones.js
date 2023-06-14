const mongoose = require("mongoose");



mongoose.connect("mongodb://127.0.0.1:27017/pokemon", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("La base de datos ha sido conectada"))
.catch(err => console.log("Error de conexion con la base de datos", err));

const pokemonSchema =  new mongoose.Schema(
    {
        nombre: String,
        tipo: String,
        nivel: Number
    });

    const pokeModel = mongoose.model("pokemones", pokemonSchema);

    const nuevoPokemon = new pokeModel( {
        nombre: "Paras",
        tipo: "Insecto",
        nivel: 19
    })

    nuevoPokemon.save()
    .then(() => console.log("El dato del pokemon ha sido creado"))
    .catch(err => console.log("El pokemon no se pudo guardar", err));

    pokeModel.find()
    .then(pokemones => console.log("Estos son todos los pokemones en la DB: ", pokemones))
    .catch(err => console.log("solo se encontro las monedas", err));
