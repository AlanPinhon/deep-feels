import { colors, Icon, Text } from "@alanpinhon/deep-feels-ui"
import './AudioCardStyles.css';

export const AudioCard = () => {
  return (
    <div className="audio-card-container">
      <div className="audio-card-info">
        <div className="text-info">
          <Text color={colors.neutralColors.white} variant='label'>Audio Title</Text>
          <Text color={colors.neutralColors.white} variant='sm'>00 min</Text>
        </div>
        <Icon name='PlayIcon' size='sm' stroke={colors.neutralColors.white}/>
      </div>
    </div>
  )
}