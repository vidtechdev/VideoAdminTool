import React, { Component } from 'react';

class Input extends Component {

    render() {
        return(
            <div className={this.props.className}>
                <input
                    className={this.props.className}
                    type={this.props.type}
                    id={this.props.id}
                    name={this.props.name}
                />{this.props.label}
                
            </div>
        );
    }
}

export default Input;