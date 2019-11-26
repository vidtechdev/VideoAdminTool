const express = require('express');
const router = express.Router();

// Video Model
const Video = require('../../models/Video');

// @route   GET api/videos
// @desc    Gets all videos
// @access   Public
router.get('/', (req, res) => {
    Video.find()
    .sort({date: -1 })
    .then(videos => res.json(videos))
    .catch((err) => {console.log(err)})
});


router.get('/:id', (req,res) => {
    Video.findById(req.params.id)
    .then(video => res.json(video))
    .catch((err) => {console.log(err)})
});

router.get('/:cluster', (req,res) => {
    Video.find(cluster[req.query])
    .then(video => res.json(video))
    .catch((err) => {console.log(err)})
});

router.get('/video', (req,res) => {
    Video.find(req.query.title)
    .then(video => res.json(video))
    .catch((err) => {console.log(err)})
});


// @route   POST api/videos
// @desc    Post a video
// @access  Public
router.post('/', (req, res) => {
    const newVideo = new Video({
        "onet":       req.body.onet,
        "videocode":  req.body.videocode,
        "title":      req.body.title,
        "parent":     req.body.parent,
        "cluster":    req.body.cluster
    });
    newVideo.save().then(video => res.json(video));
});

// router.get('/:id/cluster', (req, res) => {
//     Video.find()
//     .then(video => res.json(video))
//     .catch((err) => {console.log(err)})
// });

// UPDATING a Video Document

// ...NOT WORKING YET...

// CLUSTER ARRAY
// @route   PATCH api/videos
// @desc    Update a video cluster array
// @access  Public
router.patch('/:id', (req, res) => {
    let addCluster = req.body;
    let id = req.params.id;
    // let currentClusterList;
    // let updatedClusterList;
    
        Video.findByIdAndUpdate(id, {$push: addCluster}, {new:true})
        .then(video => {
            // currentClusterList = res.body;
            // updatedClusterList = currentClusterList.push(addCluster);
            if(video) {
                resolve({success:true, data:video});
            }else{
                reject({success:false, data:"that object parameter doesn't exist"});
            }
        })
        .catch((err) => console.log(err))

});



// @route    DELETE api/videos:id
// @desc     Delete a video
// @access   Public

router.delete('/:id', (req, res) => {
    Video.findById(req.params.id)
    .then(video => video.remove().then(() => res.json({"Video Deleted" : true})))
    .catch(err => res.status(404).json({"Video Deleted": false}));
});


module.exports = router;