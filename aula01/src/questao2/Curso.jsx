import React from 'react'
import Turma from './Turma'

export default props =>
<div>
    <h2><center>{props.course}</center></h2>
    <Turma class='Fundamentos de Programação' course={props.course}>
    </Turma>

    <Turma class='Introdução a Bando de Dados' course={props.course}>
    </Turma>
</div>