
import React from 'react'
import Form from '../../components/forms/form'
import Container from '../../components/container'

class Login extends React.Component{
    constructor(){
        super()
        this.state={disabled:true}
        this.email = React.createRef() //React.createRef diz que é um objeto
        this.password = React.createRef()
    
    }
    onDisabledButton = () => {
        console.log('Hello onDisabledButton', this.email.current)
        const inputEmail = this.email.current
        const inputPassword = this.password.current //.current chama a Ref.
        

        if(inputEmail.hasError() || inputPassword.hasError()) {
            this.setState({disabled:true})
        }else{
            this.setState({disabled:false})
        }
    } 
    
    render(){
        return(
            
            <Container>
                <Form title='Login' text='Entre com seu E-mail e Senha'>
                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <Form.Input ref={this.email} id='email' type='email' placeholder='Email' onChange={this.onDisabledButton} required/>
                    <Form.Label htmlFor='password'>Password</Form.Label>
                    <Form.Input  ref={this.password} id='password' type='password' placeholder='Password' minLength={6} onChange={this.onDisabledButton} required/>
                    <Form.Button disabled={this.state.disabled}>Enviar</Form.Button> 
                    {/* usar .state pois o botão tem dois estados: habilitado e deesabilitado */}
                    <Form.Link href='/conta'>Criar conta</Form.Link>
                </Form>
            </Container>
            
    
        )
    }
}




export default Login