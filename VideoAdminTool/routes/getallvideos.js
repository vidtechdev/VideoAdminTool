const express = require('express');
const router = express.Router();

// Video Model
const Video = require('../models/Video');

router.get('/:cluster', getVideosByCluster); 

function getVideosByCluster(req,res) {

    Video.find(req.params.cluster)
    // .sort({title: -1 })
    .then(videos => res.json(videos))
    .catch((err) => {console.log(err)});
    

}

module.exports = router;