import React, {Component} from 'react'

const cidadesStr = ['Juatama','Fortaleza','Quixadá','Banabuiú']

export default class CidadeSimples extends Component{

    
    constructor(props){
        super(props)
        this.state = {juatama:0,fortaleza:0,quixada:0,banabuiu:0,primeiro:0,ultimo:0}
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.juatama !== this.state.juatama || prevState.fortaleza !== this.state.fortaleza || 
            prevState.quixada !== this.state.quixada || prevState.banabuiu !== this.state.banabuiu){
            
            const cidades = [this.state.juatama,this.state.fortaleza,this.state.quixada,this.state.banabuiu]

            let maior = this.state.primeiro
            let menor = this.state.primeiro
            for(let i =0;i<cidades.length;i++){
                if(cidades[i]>maior){
                    maior = cidades[i]
                }
                if(cidades[i]<menor){
                    menor = cidades[i]
                }
            }
            this.setState({primeiro:maior})
            this.setState({ultimo:menor})
        }
    }

    maisVotada(){
        let saida = ''
        const cidades = [this.state.juatama,this.state.fortaleza,this.state.quixada,this.state.banabuiu]
    
        let maior = this.state.primeiro
        for(let i =0;i<cidades.length;i++){
            if(cidades[i]===maior) saida+=cidadesStr[i]+' '
        }
    
        return saida
    }
    
    menosVotada(){
        let saida = ''
        const cidades = [this.state.juatama,this.state.fortaleza,this.state.quixada,this.state.banabuiu]

        let maior = this.state.ultimo
        for(let i =0;i<cidades.length;i++){
            if(cidades[i]===maior) saida+=cidadesStr[i]+' '
        }
    
        return saida
    }
    

    render(){
        
        return(
            <div>
                <h3>Juatama: {this.state.juatama}</h3>
                <h3>Fortaleza: {this.state.fortaleza}</h3>
                <h3>Quixadá: {this.state.quixada}</h3>
                <h3>Banabuiú: {this.state.banabuiu}</h3>
                <h3>Cidade(s) mais votada(s):  {this.maisVotada()} com {this.state.primeiro} votos</h3>
                <h3>Cidade(s) mais votada(s):  {this.menosVotada()}com {this.state.ultimo} votos</h3>

                <button onClick={()=>this.setState({juatama:this.state.juatama+1})
                }>Vote em Juatama</button>

                <button onClick={()=>this.setState({fortaleza:this.state.fortaleza+1})
                }>Vote em Fortaleza</button>

                <button onClick={()=>this.setState({quixada:this.state.quixada+1})
                }>Vote em Quixadá</button>

                <button onClick={()=>this.setState({banabuiu:this.state.banabuiu+1})
                }>Vote em Banabuiú</button>
        </div>
    )
    }
}