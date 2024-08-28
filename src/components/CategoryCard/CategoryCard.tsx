import { colors, Text } from '@alanpinhon/deep-feels-ui';
import './CategoryCardStyles.css';

export const CategoryCard = () => {
  return (
    <div className="category-card">
      <div className="category-text">
        <Text variant='label' color={colors.neutralColors.white}>Category Name</Text>
      </div>
    </div>
  )
}