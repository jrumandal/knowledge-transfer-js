import React, { Component } from 'react';
import './Block.css';

class Block extends Component {
    state = {
        wet: false,
    };

    onClick = () => {
        this.setState({
            wet: true
        }, () => {
            this.props.methodToExecRiverFlow();
        })
    }

    render () {
        // let classNames = 'block';
        // if (this.state.wet === true) {
        //     classNames += ' wet';
        // }

        return (
            <div className={`block ${(this.props.isWet) ? 'wet': ''} ${this.state.wet ? 'wet-source': ''}`} onClick={this.onClick}>{this.props.children}</div>
        );
    }
};

export default Block;
