import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './components/forms/form';
import * as serviceWorker from './serviceWorker';

//o que o React faz por baixo dos panos
// const props = {
//     id='email'
//     children='Email'

// }
// Label(props);


const component = <Form title='Login' text='Entre com seu E-mail e Senha'>
        <Form.Label htmlFor='email'>Email</Form.Label>
        <Form.Input id='email' type='text' placeholder='Email'/>
        <Form.Label htmlFor='password'>Password</Form.Label>
        <Form.Input id='password' type='password' placeholder='Password'/>
        <Form.Button disabled>Enviar</Form.Button>
        <Form.Link>Criar conta</Form.Link>
</Form>

ReactDOM.render(component, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
