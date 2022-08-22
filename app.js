/** packages */
const express = require("express")
const config = require("config")
const bodyParser = require("body-parser")
const cors = require("cors");
/** app configuration */

const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded(
    {extended: true}
);

app.use(cors({ origin: "*" }));
app.use(jsonParser);
app.use(urlEncodedParser)

const ipFn= require("./middleware/getipAdress")
app.use("*", ipFn);
/** methods */

app.get("/", (req,res,next) => {
    res.send("Welcome to VideoGames Rest Api.");
});

const videogameRoutes = require("./routes/videogame.routes");
videogameRoutes(app)

app.listen(port, () =>{
    console.log("server is running...")
});