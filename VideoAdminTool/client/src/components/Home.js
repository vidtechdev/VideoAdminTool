import React, { Component } from 'react';
// import AppNavBar from '../components/AppNavBar';
import { ListGroup, ListGroupItem, Container } from 'reactstrap';


class Home extends Component {
    render() {
        return(
            <div className='page-home'>
                {/* <AppNavBar /> */}
                <Container>
                    <h3>Current State</h3>
                    <p>The back-end is a work in progress...  Using Node/Express and Mongo/Mongoose. </p>
                    <p>Front-end uses React, Redux, and Reactstrap.</p>
                    <p>Issues I'm working to figure out...</p>
                        <ul>
                            <li>Using React-Router with Redux and backend.</li>  
                            <li>Router works in dev, but breaks when deployed (which is why the Nav is curretly bootstrap tabs).</li>
                        </ul>
                    <br />
                    <h3>What I've Learned so far...</h3>
                    <p>It probably would have been smarter to teach myself Redux and Node/Express seperately</p>
                </Container>
                <br />
                <Container><h3>Working list of stuff to do/try...</h3>
                    <ListGroup>
                        <ListGroupItem>Cluster Sliders</ListGroupItem>
                        <ListGroupItem>REST O*NET to Video code XWalk Endpoint</ListGroupItem>
                        <ListGroupItem>Video Keyword Search</ListGroupItem>
                        <ListGroupItem>...Elasticsearch integration..</ListGroupItem>
                        <ListGroupItem>Video file API</ListGroupItem>
                    </ListGroup>
                </Container>
            </div>
        );
    }
}

export default Home;