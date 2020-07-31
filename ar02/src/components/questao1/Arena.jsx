import React from 'react'
import {GOKU,MAJIN} from './constants'

const Hero = props =>
    <div>
        <h2>Hero: {props.name}</h2>
        <img src={props.img} width={300} height={300}/>
    </div>

const Enemy = props =>
    <div>
        <h2>Enemy: {props.name}</h2>
        <img src={props.img} width={300} height={300}/>
    </div>

const Arena = props =>
    <div>
        <Hero name="Goku" img={GOKU}/>
        <Enemy name="Majin Boo" img={MAJIN}/>
    </div>

export default Arena
