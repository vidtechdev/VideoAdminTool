const express = require('express');
const router = express.Router();

// Video Model
const Video = require('../../models/Video');


// CLUSTER ARRAY
// @route   PATCH api/videos
// @desc    Add a value to a video cluster array
// @access  Public - Will be Private
router.patch('/:id', (req, res) => {
    let addCluster = req.body;
    let id = req.params.id;
    let currentClusterList;
    let updatedClusterList;
    
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


// @route   DELETE api/videos
// @desc    Delete/Remove a value from the video cluster array
// @access  Public -- Will be Private 
router.put('/:id', (req,res) => {
    // let removeCluster = req.body;
    let id = req.params.id;

    // findById(id, 'cluster')
    // .then(
    //     if()
    // )

    Video.findById(id)
    .then(console.log(res.data), videos => res.json(videos), console.log(videos))
    .catch((err) => {console.log(err)})

    // let currentClusters = res.body.;
    // let positionIndex = currentClusters.indexOf(req.body);
    // let updatedClusters = currentClusters.splice(positionIndex,1);
    

    // Video.findByIdAndUpdate(id, {$set: updatedClusters}, {new:true})
    // .then(video => {
    //     if(video) {
    //         resolve({success:true, data:video});
    //     }else{
    //         reject({success:false, data:"that object parameter doesn't exist"});
    //     }
    // })
    // .catch((err) => console.log(err))
        








    //     video.put(video.cluster.splice(positionIndex,1))
    //     .then(() => res.json({"Cluster Deleted" : true}))
    // })
    // .catch(err => res.status(404).json({"Cluster Deleted": false}));



    // .then((video => {
    //     // let positionIndex = video.cluster.indexOf(req.body);
    //     // video.cluster.splice(positionIndex,1);
    //     if(video) {
    //         resolve({success:true, data:video});
    //     }else{
    //         reject({success:false, data:"cluster not found"});
    //     }
    // })
    // .catch((err) => console.log(err)))

});




module.exports = router;
