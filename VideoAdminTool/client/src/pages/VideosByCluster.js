import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Card, CardImg, CardText, CardBody, CardTitle, CardLink, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { getVideos } from '../actions/videoActions';
import PropTypes from 'prop-types';

class Clusters extends Component {

    componentDidMount() {
        this.props.getVideos();
    }

    render() {
        const { videos } = this.props.video;
        const url = "https://www.CareerOneStop.org/videos/careeronestop-videos.aspx?videocode=";
        const posterRoot = "https://cdn.careeronestop.org/OccVids/Thumbnails/";

        return(
            <div>
                <ListGroup className="agriculture">
                    {videos.forEach((video) => {
                        if(video.cluster === "agriculture"){
                            // {video.map(({_id, title, videocode, onet, parent, cluster}) => (
                                <ListGroupItem key={video._id}>{video.title}</ListGroupItem>
                            //    )
                            // )
                            };
                        }
                    )}
                </ListGroup>
                {/* <ListGroup className="architecture">
                    {videos.forEach((video) => {
                        if(video.cluster === "architecture"){
                            {video.map(({_id, title, videocode, onet, parent, cluster}) => (
                                <ListGroupItem key={_id}>{title}</ListGroupItem>
                                )
                            )}
                        }
                    })
                    }
                </ListGroup>
                <ListGroup className="arts">
                    {videos.forEach((video) => {
                        if(video.cluster === "arts"){
                            {video.map(({_id, title, videocode, onet, parent, cluster}) => (
                                <ListGroupItem key={_id}>{title}</ListGroupItem>
                                )
                            )}
                        }
                    })
                    }
                </ListGroup>
                <ListGroup className="business">
                    {videos.forEach((video) => {
                        if(video.cluster === "business"){
                            {video.map(({_id, title, videocode, onet, parent, cluster}) => (
                                <ListGroupItem key={_id}>{title}</ListGroupItem>
                                )
                            )}
                        }
                    })
                    }
                </ListGroup>
                <ListGroup className="education">
                    {videos.forEach((video) => {
                        if(video.cluster === "education"){
                            {video.map(({_id, title, videocode, onet, parent, cluster}) => (
                                <ListGroupItem key={_id}>{title}</ListGroupItem>
                                )
                            )}
                        }
                    })
                    }
                </ListGroup>
                <ListGroup className="finance">
                    {videos.forEach((video) => {
                        if(video.cluster === "finance"){
                            {video.map(({_id, title, videocode, onet, parent, cluster}) => (
                                <ListGroupItem key={_id}>{title}</ListGroupItem>
                                )
                            )}
                        }
                    })
                    }
                </ListGroup>
                <ListGroup className="government">
                    {videos.forEach((video) => {
                        if(video.cluster === "government"){
                            {video.map(({_id, title, videocode, onet, parent, cluster}) => (
                                <ListGroupItem key={_id}>{title}</ListGroupItem>
                                )
                            )}
                        }
                    })
                    }
                </ListGroup>
                <ListGroup className="health">
                    {videos.forEach((video) => {
                        if(video.cluster === "health"){
                            {video.map(({_id, title, videocode, onet, parent, cluster}) => (
                                <ListGroupItem key={_id}>{title}</ListGroupItem>
                                )
                            )}
                        }
                    })
                    }
                </ListGroup>
                <ListGroup className="hospitality">
                    {videos.forEach((video) => {
                        if(video.cluster === "hospitality"){
                            {video.map(({_id, title, videocode, onet, parent, cluster}) => (
                                <ListGroupItem key={_id}>{title}</ListGroupItem>
                                )
                            )}
                        }
                    })
                    }
                </ListGroup>
                <ListGroup className="human">
                    {videos.forEach((video) => {
                        if(video.cluster === "human"){
                            {video.map(({_id, title, videocode, onet, parent, cluster}) => (
                                <ListGroupItem key={_id}>{title}</ListGroupItem>
                                )
                            )}
                        }
                    })
                    }
                </ListGroup>
                <ListGroup className="information">
                    {videos.forEach((video) => {
                        if(video.cluster === "information"){
                            {video.map(({_id, title, videocode, onet, parent, cluster}) => (
                                <ListGroupItem key={_id}>{title}</ListGroupItem>
                                )
                            )}
                        }
                    })
                    }
                </ListGroup>
                <ListGroup className="law">
                    {videos.forEach((video) => {
                        if(video.cluster === "law"){
                            {video.map(({_id, title, videocode, onet, parent, cluster}) => (
                                <ListGroupItem key={_id}>{title}</ListGroupItem>
                                )
                            )}
                        }
                    })
                    }
                </ListGroup>
                <ListGroup className="manufacturing">
                    {videos.forEach((video) => {
                        if(video.cluster === "manufacturing"){
                            {video.map(({_id, title, videocode, onet, parent, cluster}) => (
                                <ListGroupItem key={_id}>{title}</ListGroupItem>
                                )
                            )}
                        }
                    })
                    }
                </ListGroup>
                <ListGroup className="marketing">
                    {videos.forEach((video) => {
                        if(video.cluster === "marketing"){
                            {video.map(({_id, title, videocode, onet, parent, cluster}) => (
                                <ListGroupItem key={_id}>{title}</ListGroupItem>
                                )
                            )}
                        }
                    })
                    }
                </ListGroup>
                <ListGroup className="STEM">
                    {videos.forEach((video) => {
                        if(video.cluster === "STEM"){
                            {video.map(({_id, title, videocode, onet, parent, cluster}) => (
                                <ListGroupItem key={_id}>{title}</ListGroupItem>
                                )
                            )}
                        }
                    })
                    }
                </ListGroup>
                <ListGroup className="transportation">
                    {videos.forEach((video) => {
                        if(video.cluster === "transportation"){
                            {video.map(({_id, title, videocode, onet, parent, cluster}) => (
                                <ListGroupItem key={_id}>{title}</ListGroupItem>
                                )
                            )}
                        }
                    })
                    }
                </ListGroup> */}
            </div>
        );
    }

}

Clusters.propTypes = {
    getVideos: PropTypes.func.isRequired,
    video: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    video: state.video
})

export default connect(mapStateToProps, { getVideos })(Clusters);