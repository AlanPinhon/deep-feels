import { useState } from 'react';
import { Alert, Button, Text } from '@alanpinhon/deep-feels-ui';
import './EmailSentStyles.css';

export const EmailSent = () => {

  const [visibleAlert, setVisibleAlert] = useState(false);

  const onResend = () => {
    setVisibleAlert(true);
    setTimeout(() => {
      setVisibleAlert(false);
    }, 3000);
  }


  return (
    <div className="container">

      <Alert style={{position: 'absolute'}} type='success' icon='CheckIcon' mounted={visibleAlert}>
        ¡El correo ha sido enviado exitosamente!
      </Alert>

      <img className='sent-email-img' src="" alt="Enviar email" />

      <div className="title-container">
        <Text style={{textAlign: 'start'}} variant='h2'>El correo ha sido enviado</Text>
        <Text style={{textAlign: 'start'}} variant='sm'>
        Revisa tu bandeja de entrada y sigue las instrucciones del
        correo para restaurar la contraseña.
        </Text>
      </div>

      <div className="resend-email-container">
        <Text variant='xs'>¿No recibiste el correo?</Text>
        <Button style={{marginTop: '2rem'}} variant='primary' onClick={ onResend } disabled={visibleAlert}>Reenviar correo</Button>
      </div>

    </div>
  )
}