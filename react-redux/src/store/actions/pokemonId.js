//action creator
import {NOVO_ID} from './types'

export function alterarId(novoId){
    //retorna uma Action (objeto javascript)
    return {
        type: NOVO_ID,
        payload: novoId
    }
}