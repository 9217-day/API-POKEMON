const express = require("express");
const app = express();


app.get("/", (req, res) => {

    res.send("Mi primera API");
});

app.listen(3000, () => {
    console.log("El servidor esta activo en el puerto 3000");
});

