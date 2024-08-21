import { useState } from 'react';
import { SoundsHeader } from '../../../components';
import './FavoritesStyles.css';

export const Favorites = () => {

  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="container">
      <SoundsHeader
        title='Favoritos'
        description='Explora tu selección especial de sonidos favoritos.'
        value={searchValue}
        setSearchValue={setSearchValue}
      />
    </div>
  )
}