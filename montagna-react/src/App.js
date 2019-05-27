import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid/Grid';

class App extends React.Component {
  render () {
    const variabileStile = {"textAlign": "center"};
    return (
      <div className="App">
        <h1 style={variabileStile}>Generatore di fiumi</h1>


        <Grid
          generatore={
            <div className="panel-control">
              <button className="btn">Genera montagna</button>
            </div>
          }
        ></Grid>
       
      </div>
    );
  }
};

export default App;