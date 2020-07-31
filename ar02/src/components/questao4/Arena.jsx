import React from 'react'
//import {GOKU,MAJIN} from '../questao1/constants'

const Hero = props =>
    <div>
        <h2>Hero: {props.name} Arena: {props.arena}</h2>
        <img src={props.img} width={300} height={300}/>
    </div>

const Enemy = props =>
    <div>
        <h2>Enemy: {props.name} Arena: {props.arena}</h2>
        <img src={props.img} width={300} height={300}/>
    </div>

const Arena = props =>
    <div>
        {
            React.Children.map(
                props.children,
                (elemento)=>{
                    return React.cloneElement(elemento,{...props})
                }
            )
        }
    </div>

export {Hero,Enemy,Arena}
