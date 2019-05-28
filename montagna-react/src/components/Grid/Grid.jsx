import React from 'react';
import './Grid.css';
import Row from '../Row/Row';

class Grid extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            /** Griglia logica */
            dataMatrix: [],
        };
    }

    generateMountain () {
        this.setState((oldState) => {
            const newState = {
                ...oldState,
            };
            const nuovoDataMatrix = [];
            for(let i = 0; i < 10; i++) {
                nuovoDataMatrix[i] = [];
                for (let j = 0; j < 10; j++) {
                    nuovoDataMatrix[i][j] = Math.floor(Math.random()*100);
                }
            }
            newState.dataMatrix = nuovoDataMatrix;
            return newState;
        });
    }

    flowTheRiver (x, y) {
        const { dataMatrix } = this.state;
        // debugger;
        if (dataMatrix[x] !== undefined && dataMatrix[x][y] !== undefined) {
            const num = dataMatrix[x][y].height;
        
            for (let R = x-1; R < x + 2; R++) {
                for (let C = y-1; C < y + 2; C++) {
                    // if (R === i && C === y) continue;
                    if (dataMatrix[R] !== undefined && dataMatrix[R][C] !== undefined) {
                        if (dataMatrix[R][C].height < num) {
                            dataMatrix[R][C].block.classList.add('wet');
                            this.flowTheRiver(R, C);
                        }
                    } else {
                        return;
                    }
                }
            }
        } else return;
    };

    render () {
        var that = this;
        const { dataMatrix } = this.state;
        // const dataMatrix = this.state.dataMatrix;
        const rowBlock = dataMatrix.map((rigaDiAltitutidini, x) => {
            return (
                <Row key={x}
                    data={rigaDiAltitutidini}
                    getFunctionToExecRiverFlow={function (y) {
                        return function () {
                            that.flowTheRiver(x, y);
                        }
                    }
                }
                />
            );
        });
        return (
            <div>
                <div className="map">
                    {rowBlock}
                </div>
                <div onClick={() => this.generateMountain()}>
                    {this.props.generatore}
                </div>
            </div>
        );
    }
};

export default Grid;
