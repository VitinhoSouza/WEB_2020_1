import React, {Component} from 'react';
import EstudanteClasse from './EstudanteClasse'

export default class EstudanteClassePai extends Component{
    render(){
        return (
            <div>
                <EstudanteClasse nome='João' curso='RC' cidade='Ibaretama'/>    
            </div>
        )
    }
}