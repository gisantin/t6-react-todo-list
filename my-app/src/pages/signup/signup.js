import React from 'react'
import Form from '../../components/forms/form'
import Container from '../../components/container'

function Signup(){
    return(
        <Container>
            <Form title='Faça seu cadastro' text='Preencha com seus dados'>
                <Form.Label htmlFor='name'>Nome:</Form.Label>
                <Form.Input id='name' type='text'/>
                <Form.Label htmlFor='Email'>Email:</Form.Label>
                <Form.Input id='email' type='email'/>
                <Form.Label htmlFor='Phone'>Telefone:</Form.Label>
                <Form.Input id='phone' type='tel'/>
                <Form.Label htmlFor='password'>Senha:</Form.Label>
                <Form.Input id='password' type='password'/>
                <Form.Button disabled>Enviar</Form.Button>
                <Form.Link href='/login'>Fazer Login</Form.Link>
            </Form>
        </Container>
    )
}

export default Signup