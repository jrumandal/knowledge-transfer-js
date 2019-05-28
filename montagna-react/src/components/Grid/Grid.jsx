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
                    nuovoDataMatrix[i][j] = {
                        altitude: Math.floor(Math.random()*100),
                        isWet: false,
                    };
                }
            }
            newState.dataMatrix = nuovoDataMatrix;
            return newState;
        });
    }

    flowTheRiver (x, y) {
        // this.setState(
        //     (oldState) => {
        //         const newState = {
        //             ...oldState
        //         };
        //         let dataMatrixCopy = oldState.dataMatrix;

                this.getFullWetMatrix(this.state.dataMatrix, x, y);
                // newState.dataMatrix = dataMatrixCopy;

        //         return newState;
        //     }
        // );
    };

    getFullWetMatrix(dataMatrix, x, y) {
        // debugger;
        if (dataMatrix[x] !== undefined && dataMatrix[x][y] !== undefined) {
            const num = dataMatrix[x][y].altitude;
        
            for (let R = x-1; R < x + 2; R++) {
                for (let C = y-1; C < y + 2; C++) {
                    // if (R === i && C === y) continue;
                    if (dataMatrix[R] !== undefined && dataMatrix[R][C] !== undefined) {
                        if (dataMatrix[R][C].altitude < num) { // qui vuol dire che deve essere bagnato
                            dataMatrix[R][C].isWet = true;
                            this.setState({
                                dataMatrix
                            }, () => {
                                setTimeout(() => {
                                    this.getFullWetMatrix(dataMatrix, R, C);
                                }, 300)
                            })
                        }
                    } else {
                        continue;
                    }
                }
            }
            console.log('end');
            return;
        } else {
            console.log('end');
            return;
        }



    }

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
