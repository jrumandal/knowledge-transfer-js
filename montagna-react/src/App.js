import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

var COUNT=0;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      film: {
        
          titolo: 'minion',
          sottotitolo: 'BANANA',
          descrizione: 'Questo è un bel film',
          nota: 'NON GUARDARE QUESTO FILM',
          votazione: '5',
          autore: {
            nome: 'Pippo',
            cognome: 'Cause'
          },
          
          amici: ['paolo', 'andrea', 'mirko', 'elena', 'pippo', 'pippo']
      },
      asd: '1'
    };
  }

  cambiaTitoloIn (nuovoTitolo) {
    var count = COUNT++;
    // this.state.film.titolo = 'nuovo titolo' // <- sbagliato
    this.setState(function (oldState) {
        const newState = {
          ...oldState // destrutturatore
        };

        newState.film.titolo = nuovoTitolo;
        newState.film.votazione = Math.round(Math.random() * 10);
        return (newState);
      }, () => {
        console.log(count, 'ho aggiornato!');
      }
    )
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Div pippo={this.state.film} />

        <button
          onClick={() => {
            this.cambiaTitoloIn(['paolo', 'andrea', 'mirko', 'elena', 'pippo'][Math.round(Math.random()*100)%5]);
          }}
        >Click</button>
      </div>
    );
  }
};

export default App;

function mettiInLowerCase(str) {
  return str.toLowerCase();
}

function Div(props) {
  const filmData = props.pippo;
  console.log(filmData)
  return (
    <div>
      <h1>{filmData.titolo.toUpperCase()}</h1>
      <h3>{mettiInLowerCase(filmData.sottotitolo)}</h3>
      <h2 style={{ color: 'red', backgroundColor: 'pink' }}>{filmData.descrizione}</h2>
      <h2>{null}</h2>
      <h2>{undefined}</h2>
      <h2>{filmData.nota}</h2>
      <h2>
      {filmData.votazione + ' '}
      {
        (filmData.votazione > 5)
        ? 'BRAVO!'
        : 'FAI SCHIFO'
      }</h2>
      <h2>{filmData.nomeAutore}</h2>
      <h2>{filmData.cognomeAutore}</h2>

      <ul>
        {
          filmData.amici.map((nomeAmico, index) => (
          <li key={nomeAmico + index} >{nomeAmico}</li>
          ))
        }
      </ul>
    </div>
  );
}

/*
function modiPerDefinireLachiaveDiUnOggetto () {
  const index = 'chiaveN';

  return {
    'asdad': 'valore',
    sesdf: 'valore',
    [index+1]: 'valore', // 'chiaveN1': 'valore',
    0: 'valore',
    1: 'valore'
  }
}
*/

