import { Button, Input, Text } from '@alanpinhon/deep-feels-ui';
import { ChangeEvent, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './RegisterStyles.css';

export const Register = () => {

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const onNameValue = ({ target }: ChangeEvent<HTMLInputElement>) => setNameValue(target.value);
  const onEmailValue = ({ target }: ChangeEvent<HTMLInputElement>) => setEmailValue(target.value);
  const onPasswordValue = ({ target }: ChangeEvent<HTMLInputElement>) => setPasswordValue(target.value);

  const onRegister = () => {
    login();
    navigate('/emotion-selector');
  }

  return (
    <div className="container">

      <div className="title-container">
        <Text variant='h1'>Registro</Text>
        <Text variant='sm'>
          Regístrate una sola vez.
          <br />
          Explora varios mundos.
        </Text>
      </div>

      <img className='register-img' src="" alt="Imagen Registro" />

      <form className='register-form' action="">
        <Text variant='label'>
          Nombre
          <Input type='text' placeholder='Eduardo Gonzalez' value={nameValue} onChange={onNameValue}/>  
        </Text>
        <Text variant='label'>
          Email
          <Input type='email' placeholder='usuario@correo.com' value={emailValue} onChange={onEmailValue}/>  
        </Text>
        <Text variant='label'>
          Contraseña
          <Input type='password' placeholder='••••••••••' value={passwordValue} onChange={onPasswordValue}/>  
        </Text>
      </form>

      <Button style={{marginTop: '6.5rem'}} variant='primary' onClick={ onRegister }>Regístrate</Button>

      <div className="link-login-container">
        <Text variant='xs'>¿Tienes una cuenta?</Text>
        <Link to="/login">Inicia Sesión</Link>
      </div>

    </div>
  )
} 