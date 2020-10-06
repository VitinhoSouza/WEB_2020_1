import {NOVO_N1} from '../actions/types'
import {NOVO_N2} from '../actions/types'

const initialState = {
    n1:1,
    n2:1
}

export default function(state = initialState, action){

    switch(action.type){
        case NOVO_N1:
            return {
                ...state,
                n1: action.payload
            }
        case NOVO_N2:
            return {
                ...state,
                n2: action.payload
            }
        default:
            return state
    }
}