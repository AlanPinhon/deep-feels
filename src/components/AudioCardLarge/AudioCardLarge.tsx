import { colors, Icon, Text } from '@alanpinhon/deep-feels-ui';
import './AudioCardLargeStyles.css';

export const AudioCardLarge = () => {
  return (
    <div className="audio-card-lg-container">
      <div className="audio-card-info">
        <div className="text-info">
          <Text color={colors.neutralColors.white} variant='label'>Audio Title</Text>
          <Text color={colors.neutralColors.white} variant='sm'>00 min</Text>
        </div>
        <Icon name='PlayIcon' size='lg' stroke={colors.neutralColors.white}/>
      </div>
    </div>
  )
}