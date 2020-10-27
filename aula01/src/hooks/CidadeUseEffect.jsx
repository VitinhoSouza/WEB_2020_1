import React,{useState,useEffect} from 'react'

export default props =>{

    const [contJ,setContJ] = useState(0)
    const [contF,setContF] = useState(0)
    const [contQ,setContQ] = useState(0)
    const [contB,setContB] = useState(0)
    
    const [primeiro,setPrimeiro] = useState(0)
    const [ultimo,setUltimo] = useState(0)

    const cidadesStr = ['Juatama','Fortaleza','Quixadá','Banabuiú']

    useEffect(
        //1 - Função que ele irá executar
        ()=>{
            const cidades = [contJ,contF,contQ,contB]
            let maior = primeiro
            let menor = primeiro
            for(let i =0;i<cidades.length;i++){
                if(cidades[i]>maior){
                    maior = cidades[i]
                }
                if(cidades[i]<menor){
                    menor = cidades[i]
                }
            }
            setPrimeiro(maior)
            setUltimo(menor)
        },
        //2 - A variável do useState que irá disparar essa função
        [contJ,contF,contB,contQ]
    )

    function maisVotadas(){
        let saida=''

        const cidades = [contJ,contF,contQ,contB]
        let maior = primeiro
        for(let i =0;i<cidades.length;i++){
            if(cidades[i]===maior) saida+=cidadesStr[i]+' '
        }

        return saida
    }

    function menosVotadas(){
        let saida=''

        const cidades = [contJ,contF,contQ,contB]
        let menor = ultimo
        for(let i =0;i<cidades.length;i++){
            if(cidades[i]===menor) saida+=cidadesStr[i]+' '
        }

        return saida
    }

    return(
        <div>
            <h1>Juatama: {contJ}</h1>
            <h1>Fortaleza: {contF}</h1>
            <h1>Quixadá: {contQ}</h1>
            <h1>Banabuiú: {contB}</h1>
            <h1>Cidades mais votadas({primeiro}): {maisVotadas()}</h1>
            <h1>Cidade menos votada({ultimo}): {menosVotadas()}</h1>

            <button onClick={()=>{setContJ(contJ+1)}}>
                Vote em Juatama
            </button>
            <button onClick={()=>{setContF(contF+1)}}>
                Vote em Fortaleza
            </button>
            <button onClick={()=>{setContQ(contQ+1)}}>
                Vote em Quixadá
            </button>
            <button onClick={()=>{setContB(contB+1)}}>
                Vote em Banabuiú
            </button>
        </div>
    )
}