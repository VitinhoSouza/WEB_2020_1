import React from 'react'

function calcularIMC(weight, height){
    return weight/(height*height)  
}

function situacao(imc){
    if(imc <= 19){
        return "abaixo do peso"
    }else if(imc <=25){
        return "com o peso normal"
    }else{
        return "acima do peso"
    }
}

export default props =>{
    let imc = calcularIMC(props.weight,props.height);
    return( 
    <div>
        <h3>Sua altura é {props.height}m e seu peso é {props.weight}kg</h3>
        <h3>Seu IMC é {imc} </h3>
        <h3>Você está {situacao(imc)}</h3>
    </div>
    )
}