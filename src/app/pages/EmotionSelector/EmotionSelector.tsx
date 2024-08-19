import { useNavigate } from 'react-router-dom';
import { Button, Text } from '@alanpinhon/deep-feels-ui';
import './EmotionSelectorStyles.css';

export const EmotionSelector = () => {

  const navigate = useNavigate();

  const onHome = () => navigate('/home');

  return (
    <div className="container">
      <div className="header-container">
        <Text variant='lg'>¿Tienes alguna de estas emociones?</Text>
        <Text variant='sm'>Nosotros te ayudamos a mitigarlo</Text>
      </div>

      <div className="emotions-container"></div>

      <Button variant='primary' onClick={onHome}>No me identifico y deseo continuar</Button>
    </div>
  )
}