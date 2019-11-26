import React, { Component } from 'react';
import Input from './Input';

import { connect } from 'react-redux';
import { getVideos } from '../actions/videoActions';


class VideoSearch extends Component {

    render() {
        return(
            <div className="video-search">
                <Form>
                    <Input type="text" id="search-input" name="search-input" label="Video Search" />
                    <Button>Search</Button>
                </Form>
            </div>
        );
    }
}

export default VideoSearch;