import React, { Component } from 'react';
import ClusterButton from './ClusterButton';
import Input from './Input';
// import AppNavBar from './AppNavBar';
// import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { addVideo } from '../actions/videoActions';


class AddVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onet: '',
            title: '',
            parent: '',
            cluster: [],
            videocode: ''
        }
        this.addVideo = this.addVideo.bind(this);
        this.resetParent = this.resetParent.bind(this);
        this.onChange = this.onChange.bind(this);
    };
    
    addVideo = () => {
        let thisVideo = { onet: '', videocode: '', title: '', parent: '', cluster: [] };
        thisVideo.onet = document.getElementById('child-onet').value;
        thisVideo.title = document.getElementById('occupation-title').value;
        thisVideo.parent = document.getElementById('parent-onet').value;
        thisVideo.videocode = thisVideo.onet.replace('-','').replace('.','');

        let selected = document.querySelectorAll('.selected');
        let clusters = []
        selected.forEach((clstr) => {clusters.push(clstr.id)});
        thisVideo.cluster = clusters;

        this.setState({
            "onet": thisVideo.onet,
            "title": thisVideo.title,
            "parent": thisVideo.parent,
            "cluster": thisVideo.clusters,
            "videocode": thisVideo.videocode
        })

        this.props.addVideo(thisVideo);
        selected.forEach((clstr) => clstr.classList.toggle('selected'));  

        let childOnet = document.getElementById('child-onet');
        childOnet.value = '';

        let occTitle = document.getElementById('occupation-title');
        occTitle.value = '';

    };

    resetParent = () => {
        this.setState({
            onet: '',
            title: '',
            parent: '',
            cluster: [],
            videocode: ''
        })
        let textInputs = document.querySelectorAll('input');
        textInputs.forEach((input) => {input.value = ''});
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        if(this.active) {
            this.className="cluster selected"
        }else{
            this.className="cluster"
        };

        return (
            <div className='page-addvideo'>
                {/* <AppNavBar /> */}
                <section className="adding">
                    <div className="onets">

                        <Input 
                            className="text"
                            type="text"
                            id="parent-onet"
                            name="parent"
                            onChange={this.onChange}
                            value={this.state.parent.value}
                            label="Video File ONET Code"
                            onClick={this.onClick}
                        />
                        
                        <Input
                            className="text"
                            type="text"
                            id="child-onet"
                            name="onet"
                            onChange={this.onChange}
                            value={this.state.onet.value}
                            label="Child ONET Code"
                            onClick={this.onClick}
                        />
                        
                        <Input 
                            className="text"
                            type="text"
                            id="occupation-title"
                            name="title"
                            onChange={this.onChange}
                            value={this.state.title.value}
                            label="Occupation Title"
                            onClick={this.onClick}
                        />
                    
                        <div className="clusters">
                            <ClusterButton onClick={this.onClick} className="cluster" name="Agriculture &amp; Natural Resources" id="agriculture" /> 
                            <ClusterButton onClick={this.onClick} className="cluster" name="Architecture &amp; Construction" id="architecture" />
                            <ClusterButton onClick={this.onClick} className="cluster" name="Arts" id="arts" />
                            <ClusterButton onClick={this.onClick} className="cluster" name="Business" id="business" />
                            <ClusterButton onClick={this.onClick} className="cluster" name="Education" id="education" />
                            <ClusterButton onClick={this.onClick} className="cluster" name="Finance" id="finance" />
                            <ClusterButton onClick={this.onClick} className="cluster" name="Government &amp; Public Administration" id="government" />
                            <ClusterButton onClick={this.onClick} className="cluster" name="Health Science" id="health" />
                            <ClusterButton onClick={this.onClick} className="cluster" name="Hospitality &amp; Tourism" id="hospitality" />
                            <ClusterButton onClick={this.onClick} className="cluster" name="Human Services" id="human" />
                            <ClusterButton onClick={this.onClick} className="cluster" name="Information Technology" id="information" />
                            <ClusterButton onClick={this.onClick} className="cluster" name="Law, Public Safety, &amp; Corrections" id="law" />
                            <ClusterButton onClick={this.onClick} className="cluster" name="Manufacturing" id="manufacturing" />
                            <ClusterButton onClick={this.onClick} className="cluster" name="Marketing, Sales, &amp; Service" id="marketing" />
                            <ClusterButton onClick={this.onClick} className="cluster" name="STEM" id="STEM" />
                            <ClusterButton onClick={this.onClick} className="cluster" name="Transportation &amp; Logistics" id="transportation" />
                        </div>
                        <div className="" id="add" onClick={() => this.addVideo()}>Add ONET</div>
                        <div className="" id="clear-parent" onClick={() => this.resetParent()}>Next Video File</div>

                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    onet: state.onet,
    title: state.title,
    parent: state.parent,
    cluster: state.cluster,
    videocode: state.videocode
});

export default connect(mapStateToProps, { addVideo })(AddVideo);
