import { GET_VIDEOS, GET_VIDEOS_BY_TITLE, ADD_VIDEO, UPDATE_VIDEO_CLUSTER, DELETE_VIDEO, VIDEOS_LOADING } from '../actions/types';
// REMOVE_VIDEO_CLUSTER,

const initialState = {
    videos: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_VIDEOS: 
            return {
                ...state,
                videos: action.payload,
                loading: false
            };
            case GET_VIDEOS_BY_TITLE: 
            return {
                ...state,
                videos: action.payload,
                loading: false
            };
        case DELETE_VIDEO:
            return {
                ...state,
                videos: state.videos.filter(video => video._id !== action.payload)
            };
        case ADD_VIDEO:
            return {
                ...state,
                videos: [action.payload, ...state.videos]
            };
        case UPDATE_VIDEO_CLUSTER:
            return {
                ...state,
                video: action.payload,
                loading: false
            };
        // case REMOVE_VIDEO_CLUSTER:
        //     return {
        //         ...state,
        //         video: action.payload,
        //         loading: false
        //     };
        case VIDEOS_LOADING:
            return {
                ...state,
                loading: true
            };
        default: 
            return state;
    }
}