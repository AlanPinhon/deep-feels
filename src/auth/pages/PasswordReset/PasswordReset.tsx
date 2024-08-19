import { Button, Text } from '@alanpinhon/deep-feels-ui';
import './PasswordResetStyles.css';
import { useNavigate } from 'react-router-dom';

export const PasswordReset = () => {
  const navigate = useNavigate();
  const onLogin = () => navigate('/login');

  return (
    <div className="container">

      <img className='pass-reset-img' src="" alt="Imagen Meditación" />

      <div className="title-container">
        <Text variant='h2'>¡Tu contraseña ha sido restablecida con éxito!</Text>
        <Text variant='sm'>
        Es un buen momento para relajarse ahora que ya puedes volver a entrar a la aplicación.
        </Text>
      </div>

      <Button style={{marginTop: '15rem'}} variant='primary' onClick={ onLogin }>Iniciar Sesión</Button>

    </div>
  )
}