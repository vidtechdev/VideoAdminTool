import axios from 'axios';
import { GET_VIDEOS, GET_VIDEOS_BY_TITLE, ADD_VIDEO, DELETE_VIDEO, UPDATE_VIDEO_CLUSTER, VIDEOS_LOADING } from './types';
// REMOVE_VIDEO_CLUSTER,

export const getVideos = () => dispatch => {
    dispatch(setVideosLoading());
    axios
        .get('/showall')
        .then(res =>
            dispatch({
                type: GET_VIDEOS,
                payload: res.data
            })    
        );
};

export const getVideosByTitle = () => dispatch => {
    dispatch(setVideosLoading());
    axios
        .get('/video')
        .then(res =>
            dispatch({
                type: GET_VIDEOS_BY_TITLE,
                payload: res.data
            })    
        );
};

export const addVideo = video => dispatch => {
    axios
        .post('/add', video)
        .then(res => 
            dispatch({
                type: ADD_VIDEO,
                payload: res.data
            })
        );
};

export const deleteVideo = (id) => dispatch => {
    axios
        .get(`/api/videos/${id}`)
        .then( res =>
            dispatch({
                type: DELETE_VIDEO,
                payload: id
            })
        );
};

export const updateVideoCluster = (id) => dispatch => {
    axios
        .patch(`/update/${id}/cluster`)
        .then( res =>
            dispatch({
                type: UPDATE_VIDEO_CLUSTER,
                payload: res.data
            })
        );
};

// export const removeVideoCluster = (id) => dispatch => {
//     axios
//         .delete(`/update/${id}/cluster`)
//         .then( res => 
//             dispatch({
//                 type: REMOVE_VIDEO_CLUSTER,
//                 payload: res.data
//             })
//         );
// };

export const setVideosLoading = () => {
    return {
        type: VIDEOS_LOADING
    };
};