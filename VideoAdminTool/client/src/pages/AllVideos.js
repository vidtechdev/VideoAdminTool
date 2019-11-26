import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Card, CardImg, CardText, CardBody, CardTitle, CardLink, Row, Col } from 'reactstrap';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getVideos } from '../actions/videoActions';
import PropTypes from 'prop-types';
// import VideoCard from '../components/VideoCard';
// import AppNavBar from '../components/AppNavBar';

class AllVideos extends Component {

    componentDidMount() {
        this.props.getVideos();
    }

    render() {
        
        const { videos } = this.props.video;
        const url = "https://www.CareerOneStop.org/videos/careeronestop-videos.aspx?videocode=";
        const posterRoot = "https://cdn.careeronestop.org/OccVids/Thumbnails/";

        return (
            <div className='page-allvideos'>
                {/* <AppNavBar /> */}
                <Container>
                    <ListGroup>
                        {videos.map(({ _id, title, videocode, onet, parent, cluster }) => (
                            // <ListGroupItem key={_id}>{title}<br />{onet}<br />{parent}</ListGroupItem>
                            <ListGroupItem key={_id}>
                                <Row>
                                    <Col>
                                        <Card>
                                            {/* <VideoCard parent={parent} /> */}
                                            <CardBody>
                                                <CardTitle>{title}</CardTitle>
                                                <CardImg top width="100%" src={posterRoot + parent + ".jpg"} alt={title} />
                                                <Row>
                                                    <Col>ONET:</Col>
                                                    <Col>Parent:</Col>
                                                </Row>
                                                <Row>
                                                    <Col>{onet}</Col>
                                                    <Col>{parent}</Col>
                                                </Row>
                                                <br />
                                                <CardText>Clusters: {cluster}<br />Id: {_id}</CardText>
                                                <CardLink href={url+videocode}>Watch on CareerOneStop</CardLink>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Container>
            </div>
        );
    }
}

AllVideos.propTypes = {
    getVideos: PropTypes.func.isRequired,
    video: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    video: state.video
})

export default connect(mapStateToProps, { getVideos })(AllVideos);





// videos.map(video => {
//     let li = document.createElement('li');
//     let a = document.createElement('a');
//     a.href = `https://www.careeronestop.org/videos/careeronestop-videos.aspx?videocode=${video.videocode}`;
//     a.title = video.title;
//     a.innerText = video.title;
//     li.appendChild(a);   
//     return li;     
// })
