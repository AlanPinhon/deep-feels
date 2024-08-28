import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Text } from '@alanpinhon/deep-feels-ui';
import './PasswordRecoveryStyles.css';

export const PasswordRecovery = () => {

  const navigate = useNavigate();

  const [prevPassValue, setPrevPassValue] = useState('');
  const [newPassValue, setNewPassValue] = useState('');

  const handlePrevValue = ({target}:ChangeEvent<HTMLInputElement>) => setPrevPassValue(target.value);
  const handleNewValue = ({target}:ChangeEvent<HTMLInputElement>) => setNewPassValue(target.value);

  const onResetPassword = () => {
    navigate('/password-reset');
  }

  return (
    <div className="container">

      <img className='pass-recovery-img' src="" alt="Recuperar Contraseña" />

      <div className="title-container">
        <Text style={{textAlign: 'start'}} variant='h2'>¡Manos a la obra!</Text>
        <Text style={{textAlign: 'start'}} variant='sm'>
          Introduce y confirma la nueva contraseña que usarás al iniciar sesión.
        </Text>
      </div>

      <form className='pass-recovery-form' action="">
        <Text variant='label'>
          Nueva contraseña
          <Input type='password' placeholder='••••••••••' value={prevPassValue} onChange={handlePrevValue}/>  
        </Text>
        <Text variant='label'>
          Confirma tu contraseña
          <Input type='password' placeholder='••••••••••' value={newPassValue} onChange={handleNewValue}/>  
        </Text>
      </form>

      <Button variant='primary' onClick={ onResetPassword }>Restablecer</Button>

    </div>
  )
}