import React from 'react';
import './App.css';

import Estudante from './components/questao1/Estudante'
import EstudanteClasse from './components/questao2/EstudanteClasse'
import EstudantePai from './components/questao3/EstudantePai';
import EstudanteClassePai from './components/questao4/EstudanteClassePai';


//questão 1
/*function App() {
  return (
    <div className="App"> 
        <Estudante/>
    </div>
  );
}*/

//questão 2
/*function App() {
  return (
    <div className="App"> 
        <EstudanteClasse/>
    </div>
  );
}*/

//questão 3
/*function App() {
  return (
    <div className="App"> 
        <EstudantePai/>
    </div>
  );
}*/

//questão 4
function App() {
  return (
    <div className="App"> 
        <EstudanteClassePai/>
    </div>
  );
}

export default App;