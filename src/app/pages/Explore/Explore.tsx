import { useState } from 'react';
import { SoundsHeader } from '../../../components';
import './ExploreStyles.css';
import { CategoryCard } from '../../../components/CategoryCard/CategoryCard';

export const Explore = () => {

  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="container">
      <SoundsHeader
        title='Explorar'
        description='Encuentra sonidos que armonizan con tu paz interior.'
        value={searchValue}
        setSearchValue={setSearchValue}
      />

      <div className="audios-container">
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>
      </div>
    </div>
  )
}