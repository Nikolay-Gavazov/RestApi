const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { commentController } = require('../controllers');
const { studiosController } = require('../controllers');
// middleware that is specific to this router
studiosController.
router.get('/', studiosController.getStudios);
router.post('/', /* auth(), */ studiosController.createStudio);

router.get('/:studioId', studiosController.getStudio);
router.post('/:studioId', /* auth(), */ commentController.createComment);
router.put('/:studio/comments/:commentId', auth(), commentController.editComment);
router.delete('/:studio/comments/:commentId', auth(), commentController.deleteComment);


module.exports = router