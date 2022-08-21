/** Dto */
const videoGameDto = require("../../model/dto/videogame.dto");

/** helper */
const notHelper = require("../helpers/notification.helper")

exports.createVideoGame = (req, res, next) =>  {
    let vg = {
        code: req.body.code,
        name: req.body.name,
        score: req.body.score
    };
    videoGameDto.create(vg,(err,data) => {
        if (err){
            videoGameDto.delete({_id:data._id},(err,data) => {
                return res.status(400).json(
                    {
                        error : err
                    }
                );
            });
            
        }
        notHelper.sendSMS(vg.score);
        res.status(201).json(
            {
                info:data
            }
        )
        
    });
};

exports.updateVideoGame = (req, res, next) =>  {
    let vg = {
        code: req.body.code,
        name: req.body.name,
        score: req.body.score
    };
    
    videoGameDto.update({_id:req.body.id}, vg,(err,data) => {
        if (err){
            return res.status(400).json(
                {
                    error : err
                }
            );
        }

        res.status(201).json(
            {
                info:data
            }
        )
    });
};

exports.getAll = (req, res, next) =>  {
    videoGameDto.getAll({}, (err,data) => {
        if (err){
            return res.status(400).json(
                {
                    error : err
                }
            );
        }
        res.status(201).json(
            {
                info:data
            }
        )
    });
};

exports.getByCode = (req, res, next) =>  {
    videoGameDto.getByCode({code: req.params.code}, (err,data) => {
        if (err){
            return res.status(400).json(
                {
                    error : err
                }
            );
        }
        res.status(201).json(
            {
                info:data
            }
        )
    });
};


exports.deleteVideoGame = () =>  {
    videoGameDto.delete({_id:req.body.id}, (err,data) => {
        if (err){
            return res.status(400).json(
                {
                    error : err
                }
            );
        }
        res.status(204).json()
    });
};