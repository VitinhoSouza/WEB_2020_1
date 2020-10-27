import React from 'react'
import Estudante from './Estudante'

export default props =>
<div>
    <h2><center>{props.class}</center></h2>
    <Estudante name = 'André' class={props.class} course={props.course}/>
    <Estudante name = 'Alisson' class={props.class} course={props.course}/>
    <Estudante name = 'Antonio' class={props.class} course={props.course}/>
</div>
