import React, { Component } from 'react';


class ClusterButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSelected: false,
            className: "cluster"
        };

        // this.toggleSelected = this.toggleSelected.bind(this);
    };

    toggleSelected = () => {
        this.setState({
            isSelected: !this.state.isSelected,
        });

        if(!this.state.isSelected){
            this.setState({
                className: "cluster selected"
            });
        }else{
            this.setState({
                className: "cluster"
            });
        }
    }

    render() {
        return (
            <div
                className={this.state.className.toString()}
                id={this.props.id}
                active={this.state.isSelected.toString()}
                onClick={this.toggleSelected}
            >{this.props.name}
            </div>
        );
    }
};

export default ClusterButton;