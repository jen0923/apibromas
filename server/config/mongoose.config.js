const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/chistes", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(
        () => console.log("Se estableció la conexión con la base de datos")
    )
    .catch(
        (err) => console.log("Algo salió mal, revisa el error", err )
    );