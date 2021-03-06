import React, { Component } from 'react'
import './App.css'

import Navigate from './components/Navigate'
import Sum from './components/Sum'
import Multiplication from './components/Multiplication'
import Bigger from './components/Bigger'

export default class App extends Component {

  
  render() {
    return (
      <div className='container'>
        <h1>Atividade Remota 10</h1>
        <div className='line'>
          <Navigate/>
        </div>

        <div className='line'>
          <Sum/>
          <Multiplication/>
          <Bigger/>
        </div>
      </div>
    )
  }
}