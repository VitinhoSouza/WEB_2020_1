import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from './Card'

class PokemonBack extends Component {

    render() {
        const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${this.props.id}.png`
        return (
            <Card title='Costas' red>
                <img src={url} alt={this.props.id} />
            </Card>
        )
    }
}

function mapStateToProps(state){
    return {
        id: state.pokemonId.id
    }
}

export default connect(mapStateToProps)(PokemonBack)