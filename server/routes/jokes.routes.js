const JokeController = require("../controller/jokes.controller");

module.exports = (app) =>{
    app.get("/api/jokes", JokeController.getAllJokes);
    app.post("/api/jokes", JokeController.newJoke);
    app.get("/api/jokes/:_id", JokeController.getJokeById);
    app.put("/api/jokes/:_id", JokeController.updateJoke);
    app.delete("/api/jokes/:_id", JokeController.deleteJoke);
}