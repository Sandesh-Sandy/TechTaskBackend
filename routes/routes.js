const express = require('express');
const router = express.Router();
const images = require('../models/model')

router.get('/', (req, res) => {
    images.find({})
    .then(item => res.send(item))
    .catch(err => res.send(err.message))
})

router.post('/', (req, res) => {
    const image = new images({
        title: req.body.title,
        url: req.body.url
    })
    image.save().then(() => res.send(image))
})

module.exports = router