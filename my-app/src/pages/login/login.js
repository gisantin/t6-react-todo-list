
import React from 'react'
import Form from '../../components/forms/form'
import Container from '../../components/container'

class Login extends React.Component{
    constructor(){
        super()
        this.state={disabled:true}
    
    }
    onDisabledButton = () => {
        console.log('Hello onDisabledButton')
    } 
    
    render(){
        return(
            
            <Container>
                <Form title='Login' text='Entre com seu E-mail e Senha'>
                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <Form.Input id='email' type='email' placeholder='Email' onChange={this.onDisabledButton} required/>
                    <Form.Label htmlFor='password'>Password</Form.Label>
                    <Form.Input id='password' type='password' placeholder='Password' minLength={6} onChange={this.onDisabledButton} required/>
                    <Form.Button disabled={!this.state.disabled}>Enviar</Form.Button> 
                    {/* usar .state pois o botão tem dois estados: habilitado e deesabilitado */}
                    <Form.Link>Criar conta</Form.Link>
                </Form>
            </Container>
            
        
        )
    }
}




export default Login