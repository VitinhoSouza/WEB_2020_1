import React, { Component } from 'react'
//import axios from 'axios'
import Card from './Card'
import { connect } from 'react-redux'

class Bigger extends Component {

    maior(){
        if(this.props.n1 >= this.props.n2){
            return this.props.n1
        }else{
            return this.props.n2
        }
    }

    render() {
        
        return (
            <Card title='O maior' red>
                {this.maior()}
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

export default connect(mapStateToProps)(Bigger)