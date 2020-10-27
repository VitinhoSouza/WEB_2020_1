import React,{useState,useEffect} from 'react'

export default props =>{

    const [cont,setCont] = useState(0)
    const [status,setStatus] = useState('PAR')

    useEffect(
        //1 - Função que ele irá executar
        ()=>{
            if(cont%2===0){
                setStatus('PAR')
            }else{
                setStatus('IMPAR')
            }
        },
        //2 - A variável do useState que irá disparar essa função
        [cont]
    )
    return(
        <div>
            <h1>Contador:{cont} </h1>
            <h1>Status: {status}</h1>
            <button onClick={()=>setCont(cont+1)}>
                Incrementa
            </button>
        </div>
    )
}