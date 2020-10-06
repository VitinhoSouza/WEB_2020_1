import { createStore, combineReducers} from 'redux'
import NumerosReducer from './reducers/Numeros'

//arquivo com os reducers, funções que mantem o estado da aplicação
//qualquer action disparada, chama TODOS os reducers
//state: estado anterior
//action: ação que muda o state
const reducers = combineReducers({
    Numeros: NumerosReducer
})

//criando o store a partir dos reducers
function storeConfig(){
    return createStore(reducers)
}

export default storeConfig