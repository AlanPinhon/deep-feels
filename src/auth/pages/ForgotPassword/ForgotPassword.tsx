import { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Icon, Input, Text } from '@alanpinhon/deep-feels-ui'
import './ForgotPasswordStyles.css'

export const ForgotPassword = () => {

  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState('');

  const onEmailValue = ({ target }: ChangeEvent<HTMLInputElement>) => setEmailValue(target.value);
  const onSendLink = () => navigate('/email-sent');


  return (
    <div className="container">
      <Link className='back-btn' to="/login">
        <Icon name='ArrowLeftIcon' size='lg'/>
      </Link>

      <img className='forget-pass-img' src="" alt="Olvidé mi contraseña" />

      <div className="title-container">
        <Text style={{textAlign: 'start'}} variant='h2'>Reiniciar contraseña</Text>
        <Text style={{textAlign: 'start'}} variant='sm'>
          Introduce tu email y te enviaremos un enlace en donde podrás restaurar tu contraseña.
        </Text>
      </div>

      <form className='send-link-form' action="">
        <Text variant='label'>
          Email
          <Input type='email' placeholder='usuario@correo.com' value={emailValue} onChange={onEmailValue}/>  
        </Text>
      </form>

      <Button style={{marginTop: '11rem'}} variant='primary' onClick={ onSendLink }>Continuar</Button>

    </div>
  )
}