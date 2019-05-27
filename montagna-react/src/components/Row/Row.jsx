import React from 'react';
import './Row.css';
import Block from '../Block/Block';

class Row extends React.Component {
    render () {
        /** Array di numeri */
        const altitudini = this.props.data;
        const blocchi = altitudini.map((valore, y) => {
            return (
                <Block key={y} methodToExecRiverFlow={this.props.getFunctionToExecRiverFlow(y)} >{valore}</Block>
            )
        });

        return (
            <div className="row">
                {blocchi}
            </div>
        );
    }
};

export default Row;