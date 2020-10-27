import React from 'react'


export default props =>{
    const calcularIMC = props =>{
        return props.weight/(props.height*props.height)  
    }
    
    return (
        <div>
            <button onClick={
                ()=>
                props.notificarIMCPai(calcularIMC(props))
                }
            >
                Calcular IMC
            </button>
        </div>
    )
}