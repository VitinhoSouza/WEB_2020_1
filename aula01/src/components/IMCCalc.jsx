import React from 'react'
import IMCMsg from './IMCMsg'

function calcularIMC(weight, height){
    return weight/(height*height)  
}

export default props =>{
    let imc = calcularIMC(props.weight, props.height)
    return <div>
        <h3>Seu IMC é {imc}</h3>
        <h3><IMCMsg imc = {imc}/></h3>
    </div>
}
