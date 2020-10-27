import React from 'react'

export default props =>
<div>
    <h2><center>{props.class}</center></h2>
    {//chave do JSX
        React.Children.map(
            props.children, estudante =>{
                return React.cloneElement(estudante,{...props})
            }
        )
    }
</div>
