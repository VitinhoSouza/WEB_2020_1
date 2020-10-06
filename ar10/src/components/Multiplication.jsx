import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from './Card'

class Multiplication extends Component {
    render() {
        //const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`
        //<img src={url} alt={this.props.id} />
        const mult = this.props.n1 * this.props.n2
        return (
            <Card title='Multiplicação' green>
                {mult}
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

export default connect(mapStateToProps)(Multiplication)