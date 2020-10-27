import React from 'react'
import IMCFilho from './IMCFilho'

export default props => {    
    const imcRecebido = msg => alert('Seu imc é ' + msg)
    return (        
        <div>            
            <center>
                <IMCFilho height={1.73} weight={70} notificarIMCPai={imcRecebido} />   
            </center>     
        </div>  
    ) 
}