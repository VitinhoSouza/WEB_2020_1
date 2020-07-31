import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Arena from './components/questao1/Arena'
import {GOKU,MAJIN} from './components/questao1/constants'
//import World from './components/questao3/World'
import {Hero, Enemy, Arena} from './components/questao4/Arena'

//questão 1
/*function App() {
  return (
    <div className="App"> 
        <Arena/>
    </div>
  );
}*/

//questão 3
/*function App() {
  return (
    <div className="App"> 
        <World>
            <Arena/>
            <Arena/>
            <Arena/>
        </World>
    </div>
  );
}*/

//questão 4
function App() {
  return (
    <div className="App"> 
        <Arena arena='Castelao'>
            <Hero name="Goku" img={GOKU}/>
            <Enemy name="Majin Boo" img={MAJIN}/>
        </Arena>
    </div>
  );
}

export default App;