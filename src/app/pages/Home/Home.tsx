import { Icon, Text } from '@alanpinhon/deep-feels-ui';
import './HomeStyles.css';

export const Home = () => {
  return (
    <div className="container">

      <div className="home-header-container">
        <div className="welcome-msg-container">
          <Text variant='h3'>Buenas tardes Alan</Text>
          <Text variant='sm'>¿Cómo te sientes el día de hoy?</Text>
        </div>

        <Icon name='UserIcon' size='lg' background/>
      </div>

      <div className="feels-component"></div>

      <Text style={{alignSelf: 'self-start'}} variant='h3'>Sonido sugerido del día</Text>

      <div className="subtitle-container">
        <Text variant='h3'>Sonidos recientes</Text>
        <Text variant='sm'>Ver más</Text>
      </div>
    </div>
  )
}