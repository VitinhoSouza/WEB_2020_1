import React from 'react'
import Personagem from './Personagem'

//Relação HardCoded
/* export default (props) =>
<div>
    <Personagem name='Arya' house='Stark'/>
    <Personagem name='Robert' house='Baratheon'/>
    <Personagem name='John Snow' house='Targaryan'/>
</div> */

//Generico
/*export default (props) =>
<div>
    <h3>Casa {props.house}</h3>
    {props.children}
</div>*/

export default (props) =>
<div>
    <h1>Casa {props.house}</h1>
    {//chave do JSX
        React.Children.map(
            props.children, personagem =>{
                return React.cloneElement(personagem,{...props})
            }
        )
    }
</div>