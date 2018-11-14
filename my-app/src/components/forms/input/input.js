import React , {Component} from 'react'  //este modo é o mesmo que escrever la embaixo class Input extends React.Component
import './input.css'


class Input extends Component {  //ou React.Compnents sem importar lá em cima
        constructor(props){
            super(props)
            this.state={message:null} //.state ele guarda o estado em que está o código no momento. neste caso ele esta sem erro.
        }
        hasError = () => { // Criou um método pra validar se tem erro ou não ex.erro: Campo obrigatório etc...
            if(this.state.message === null || this.state.message !== ''){
                return true //se não tiver erro, retorna falso, nao deu erro
            }else {
                return false // se tiver erro retorna true
            }
        }
        handleChange = (e) => { //arrow function substitui o .bind() no ES6
            const value = e.target.value
            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            let message = ''

            console.log('hello onChange', value);
            //this.handleChange = this.handleChange.bind(this) //ele direciona o this.handleChange pra ser usado fora dessa função
            if(this.props.required && value.trim() === ''){ //.trim() remove espaços do campo
                message = 'Campo Obrigatório'
            }else if(value && this.props.minLength && value.length < this.props.minLength){
                message = `Digite pelo menos ${this.props.minLength} caracteres` 
            }else if(this.props.type==='email' && !regex.test(value)){
                message = 'Digite um email válido'
            }
            this.setState({message:message}, this.props.onChange)
        }
        render() {
            return(
                <React.Fragment> 
                    <input  
                    onChange={this.handleChange}
                    onBlur={this.handleChange}
                    type = {this.props.type}
                    id= {this.props.id}
                    className='input' 
                    placeholder = {this.props.placeholder}
                    required={this.props.required}
                />
                <p className='input__erro'>{this.state.message}</p>
                </React.Fragment> //o react pede que as props estejam envoltas em uma <div>. Para nao colocar uma <div>, o React fornece uma tag prórpia <React.Fragment>
            )
        }
}





export default Input