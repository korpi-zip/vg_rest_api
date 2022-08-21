
const controller = require("../controller/logic/videogame.controller")


module.exports = (app) => { 
     
    app.get("/videogame", (req, res, next) => {
        controller.getAll(req,res,next);
    });    
    app.post("/videogame", (req, res, next) => {
        controller.createVideoGame(req,res,next);
    });
     app.get("/videogame/bycode/:code", (req, res, next) => {
        controller.getByCode(req,res,next);
     });        
    app.put("/videogame", (req, res, next) => {
        controller.updateVideoGame	(req,res,next);        
    });
    app.delete("/videogame", (req, res, next) => {
        controller.deleteVideoGame(req,res,next);
    });
}