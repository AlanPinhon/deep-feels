import { colors, Text  } from '@alanpinhon/deep-feels-ui';
import './FeelingCardStyles.css';

export const FeelingCard = () => {
  return (
    <div style={{backgroundColor: colors.neutralColors.white}} className="feeling-card">
      <div className="feeling-img"></div>
      <Text style={{color: colors.darkPurple[500]}} variant='sm'>Feeling Text</Text>
    </div>
  )
}