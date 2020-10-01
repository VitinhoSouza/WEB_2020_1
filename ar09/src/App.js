import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Inserir from './components/Inserir.jsx'
import Editar from './components/Editar.jsx'
import Listar from './components/Listar.jsx'
import Home from './components/Home.jsx'



export default class App extends Component{

  render(){

    return(
      <Router>
        <div className='container'>
          
          <nav className='navbar navbar-expand-lg navbar-light bg-light' >
            <Link to={'/'} className='navbar-brand'>CRUD</Link>
            
            <div className='collapse navbar-collapse' id='navabrSupportedContent'>
              <ul className='navbar-nav mr-auto'>
                <li>
                  <Link to={'/'} className='nav-link'>Home</Link>
                </li>
                <li>
                  <Link to={'/inserir'} className='nav-link'>Inserir</Link>
                </li>
                <li>
                  <Link to={'/listar'} className='nav-link'>Listar</Link>
                </li>

              </ul>

            </div>
          </nav>

          <h2>Projeto CRUD!</h2> <br/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/inserir' component={Inserir}/>
            <Route path='/editar/:id' component={Editar}/>
            <Route path='/listar' component={Listar}/>
          </Switch>

        </div>
      </Router>
    )
  }
}

