const { studioModel } = require('../models');

function getStudios(req, res, next) {
    studioModel.find()
        .populate('userId')
        .then(studios => res.json(studios))
        .catch(next);
}

function getStudio(req, res, next) {
    const { studioId } = req.params;

    studioModel.findById(studioId)
        .populate({
            path : 'comments',
            populate : {
              path : 'userId'
            }
          })
        .then(studio => res.json(studio))
        .catch(next);
}

function createStudio(req, res, next) {
    const { studioName, img, description } = req.body;
    const { _id: userId } = 123 /* req.user */;

    studioModel.create({ studioName, userId , img, description }).then(studio => res.json(studio)).catch(next)
        
}



module.exports = {
    getStudio,
    getStudios,
    createStudio,
    
}
