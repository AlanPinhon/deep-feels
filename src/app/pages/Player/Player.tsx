import { colors, Icon, Text } from '@alanpinhon/deep-feels-ui';
import { Link } from 'react-router-dom';
import './PlayerStyles.css';

export const Player = () => {
  return (
    <div className="container">

      <Link className='back-btn' to="/settings">
        <Icon name='ArrowLeftIcon' size='lg'/>
      </Link>

      <img className='audio-img' src="" alt="Track image" />

      <div className="audio-info-container">
        <div className="audio-info">
          <Text color={colors.purple[500]} variant='lg'>Category</Text>
          <Text color={colors.purple[500]} variant='h3'>Audio Title</Text>
        </div>
        <Icon name='HeartIcon' size='lg' stroke={colors.red[700]} fill={colors.red[300]}/>
      </div>

      <div className="player-controls">
        <Icon name='PrevIcon' size='xl'/>
        <Icon name='PlayIcon' size='xl'/>
        <Icon name='NextIcon' size='xl'/>
      </div>

    </div>
  )
}