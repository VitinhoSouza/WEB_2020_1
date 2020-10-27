import React from 'react'
import IMCCalc from './IMCCalc'


export default (props) =>
    <div>
        <h3>Sua altura é {props.height}m e seu peso é {props.weight}kg</h3>
        <IMCCalc weight = {props.weight} height={props.height}></IMCCalc>
    </div>