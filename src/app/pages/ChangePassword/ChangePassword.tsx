import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Input, Text } from "@alanpinhon/deep-feels-ui";
import './ChangePasswordStyles.css';

export const ChangePassword = () => {

  const [prevPass, setPrevPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [verifyPass, setVerifyPass] = useState('');

  const handlePrevPassword = ({target}:ChangeEvent<HTMLInputElement>) => setPrevPass(target.value);
  const handleNewPassword = ({target}:ChangeEvent<HTMLInputElement>) => setNewPass(target.value);
  const onVerifyPassword = ({target}:ChangeEvent<HTMLInputElement>) => setVerifyPass(target.value);

  return (
    <div className="container">

      <Link className='back-btn' to="/settings">
        <Icon name='ArrowLeftIcon' size='lg'/>
      </Link>

      <Text variant='h3'>Cambiar contraseña</Text>

      <form className='pass-recovery-form' action="">
        <Text variant='label'>
          Contraseña actual
          <Input type='password' placeholder='••••••••••' value={prevPass} onChange={handlePrevPassword}/>  
        </Text>
        <Text variant='label'>
          Nueva contraseña
          <Input type='password' placeholder='••••••••••' value={newPass} onChange={handleNewPassword}/>  
        </Text>
        <Text variant='label'>
          Confirma tu contraseña
          <Input type='password' placeholder='••••••••••' value={verifyPass} onChange={onVerifyPassword}/>  
        </Text>
      </form>

      <Button style={{margin: '2rem 0'}} variant='primary' onClick={() => console.log('Contraseña actualizada')}>Actualizar contraseña</Button>

      <Link to="/settings">¿Olvidaste tu contraseña?</Link>
    </div>
  )
}