import './Navigate.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import  { alterarN1, alterarN2 } from '../store/actions/Numeros'
import Card from './Card'

class Navigate extends Component {

    proximo() {
        const novoNumero = (this.props.n1 + 1 > 1000) ? this.props.n1 : this.props.n1 + 1
        this.props.alterarNumeros(novoNumero,true)
        
    }

    anterior() {
        const novoNumero = (this.props.n1 - 1 < 1) ? this.props.n1 : this.props.n1 - 1
        this.props.alterarNumeros(novoNumero,true)
    }

    soma10(){
        const novoNumero = (this.props.n1 + 10 > 1000) ? 1000 : this.props.n1 + 10
        this.props.alterarNumeros(novoNumero,true)
    }

    subtrai10() {
        const novoNumero = (this.props.n1 - 10 < 1) ? 1 : this.props.n1 - 10
        this.props.alterarNumeros(novoNumero,true)
    }

    proximo_2() {
        const novoNumero = (this.props.n2 + 1 > 1000) ? this.props.n2 : this.props.n2 + 1
        this.props.alterarNumeros(novoNumero,false)
        
    }

    anterior_2() {
        const novoNumero = (this.props.n2 - 1 < 1) ? this.props.n2 : this.props.n2 - 1
        this.props.alterarNumeros(novoNumero,false)
    }

    soma10_2(){
        const novoNumero = (this.props.n2 + 10 > 1000) ? 1000 : this.props.n2 + 10
        this.props.alterarNumeros(novoNumero,false)
    }

    subtrai10_2() {
        const novoNumero = (this.props.n2 - 10 < 1) ? 1 : this.props.n2 - 10
        this.props.alterarNumeros(novoNumero,false)
    }

    render() {
        return (
            <div>
                <Card title='Número 1' dark>
                    <div className='navigate'>
                        <button
                            className='btn btn-secondary' onClick={() => this.subtrai10()}>
                            -10
                        </button>
                        <button
                            className='btn btn-secondary' onClick={() => this.anterior()}>
                            Anterior
                        </button>
                        <button
                            className='btn btn-secondary' onClick={() => this.proximo()}>
                            Próximo
                        </button>
                        <button
                            className='btn btn-secondary' onClick={() => this.soma10()}>
                            +10
                        </button>
                        <input value={this.props.n1} readOnly />
                    </div>
                </Card>

                <Card title='Número 2' dark>
                    <div className='navigate'>
                        <button
                            className='btn btn-secondary' onClick={() => this.subtrai10_2()}>
                            -10
                        </button>
                        <button
                            className='btn btn-secondary' onClick={() => this.anterior_2()}>
                            Anterior
                        </button>
                        <button
                            className='btn btn-secondary' onClick={() => this.proximo_2()}>
                            Próximo
                        </button>
                        <button
                            className='btn btn-secondary' onClick={() => this.soma10_2()}>
                            +10
                        </button>
                        <input value={this.props.n2} readOnly />
                    </div>
                </Card>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        n1: state.Numeros.n1,
        n2: state.Numeros.n2
    }
}

//mapeia o actioncreator para o props deste componente //a função action creator já vai pro props do componente
function mapDispatchToProps(dispatch){
    return {
        alterarNumeros(novoN,n1){
            if(n1===true){
                const action = alterarN1(novoN)
                dispatch(action)
            }else{
                const action = alterarN2(novoN)
                dispatch(action)
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigate)