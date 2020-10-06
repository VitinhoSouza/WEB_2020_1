import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from './Card'

class Sum extends Component {
    render() {
        //const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`
        //<img src={url} alt={this.props.id} />
        const soma = this.props.n1 + this.props.n2
        return (
            <Card title='Soma' blue>
                {soma}
            </Card>
        )
    }
}

function mapStateToProps(state){
    return {
        n1: state.Numeros.n1,
        n2: state.Numeros.n2
    }
}

export default connect(mapStateToProps)(Sum)