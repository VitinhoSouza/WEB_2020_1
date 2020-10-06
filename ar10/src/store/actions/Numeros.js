//action creator
import {NOVO_N1} from './types'
import {NOVO_N2} from './types'

export function alterarN1(novoN1){
    //retorna uma Action (objeto javascript)
    return {
        type: NOVO_N1,
        payload: novoN1
    }
}

export function alterarN2(novoN2){
    //retorna uma Action (objeto javascript)
    return {
        type: NOVO_N2,
        payload: novoN2
    }
}