import { useState } from 'react';
import { SoundsHeader } from '../../../components';
import './ExploreStyles.css';

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
    </div>
  )
}