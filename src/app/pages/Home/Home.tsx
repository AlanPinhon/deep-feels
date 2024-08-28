import { Icon, Text } from '@alanpinhon/deep-feels-ui';
import { AudioCardLarge } from '../../../components/AudioCardLarge/AudioCardLarge';
import { AudioCard } from '../../../components/AudioCard/AudioCard';
import './HomeStyles.css';

export const Home = () => {
  return (
    <div className="container">

      <div className="home-header-container">
        <div className="welcome-msg-container">
          <Text variant='h3'>Buenas tardes Alan</Text>
          <Text variant='sm'>¿Cómo te sientes el día de hoy?</Text>
        </div>

        <Icon name='UserIcon' size='sm' background/>
      </div>

      <div className="feels-component"></div>

      <Text style={{alignSelf: 'self-start', margin: '1rem 0'}} variant='h3'>Sonido sugerido del día</Text>

      <AudioCardLarge/>

      <div className="subtitle-container">
        <Text variant='h3'>Sonidos recientes</Text>
        <Text variant='sm'>Ver más</Text>
      </div>

      <div className="audios-container">
        <AudioCard/>
        <AudioCard/>
        <AudioCard/>
        <AudioCard/>
        <AudioCard/>
        <AudioCard/>
      </div>
    </div>
  )
}