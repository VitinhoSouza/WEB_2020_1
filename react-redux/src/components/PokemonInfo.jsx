import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
import { connect } from 'react-redux'

class PokemonInfo extends Component {

    constructor(props){
        super(props)
        this.state = {name:'',height:'',order:'',weight:''}
    }

    componentDidMount(){
        this.carregar()
    }

    componentDidUpdate(prevProps){
        if(this.props.id !== prevProps.id){
            console.log(this.props.id + ' ' + prevProps.id)
            this.carregar()
        }
    }

    carregar(){
        const url = `https://pokeapi.co/api/v2/pokemon/${this.props.id}`
        axios.get(url)
        .then(
            (res)=>{
                this.setState({
                    name: res.data.name,
                    height: res.data.height,
                    order: res.data.order,
                    weight: res.data.weight,
                })
            }
        )
        .catch(error=>console.log(error))
    }

    render() {
        return (
            <Card title='Informações do Pokémon' green>
                <strong style={{textTransform:'capitalize'}}>{this.state.name}</strong>
                <br />Altura: {this.state.height}
                <br />Peso: {this.state.weight}
                <br />Ordem: {this.state.order}
            </Card>
        )
    }
}

function mapStateToProps(state){
    return {
        id: state.pokemonId.id
    }
}

export default connect(mapStateToProps)(PokemonInfo)