import React from 'react'

function situacao(imc){
    if(imc <= 19){
        return "Abaixo do peso"
    }else if(imc <=25){
        return "Peso normal"
    }else{
        return "Acimda do peso"
    }
}

export default props =>
    <div>
        <h3>Sua situação é {situacao(props.imc)} </h3> 
    </div>