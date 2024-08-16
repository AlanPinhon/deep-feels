import { ChangeEvent, useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Button, Text, Input, Checkbox } from '@alanpinhon/deep-feels-ui';
import { Link } from 'react-router-dom';
import './LoginStyles.css';

export const Login = () => {

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const onEmailValue = ({ target }: ChangeEvent<HTMLInputElement>) => setEmailValue(target.value);
  const onPasswordValue = ({ target }: ChangeEvent<HTMLInputElement>) => setPasswordValue(target.value);

  const handleChecked = () => setIsChecked(!isChecked);

  const { login } = useContext(AuthContext);

  const onLogin = () => {
    login();
  }

  return (
    <div className='container'>
      <div className="title-container">
        <Text variant='h1'>Iniciar sesión</Text>
        <Text variant='sm'>
          Un gusto tenerte de vuelta.
          <br />
          Varias experiencias relajantes te están esperando.
        </Text>
      </div>

      <img className='login-img' src="" alt="Imagen Login" />

      <form className='login-form' action="">
        <Text variant='label'>
          Email
          <Input type='text' placeholder='usuario@correo.com' value={emailValue} onChange={onEmailValue}/>  
        </Text>
        <Text variant='label'>
          Contraseña
          <Input type='password' placeholder='••••••••••' value={passwordValue} onChange={onPasswordValue}/>  
        </Text>
      </form>

      <div className="login-options-container">
        <div className='checkbox-container'> 
          <Text htmlFor='checkbox-login' variant='label' style={{display: 'flex', alignItems: "center"}}>
            <Checkbox id='checkbox-login' name='checkbox-login' checked={isChecked} onChange={handleChecked}/>
            Recordarme
          </Text>
        </div>

        <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
      </div>

      <Button style={{marginTop: '6.5rem'}} variant='primary' onClick={ onLogin }>Iniciar Sesión</Button>

      <div className="link-register-container">
        <Text variant='xs'>¿No tienes una cuenta?</Text>
        <Link to="/register">Regístrate</Link>
      </div>
    </div>
  )
}