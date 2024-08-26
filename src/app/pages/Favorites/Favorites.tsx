import { useState } from 'react';
import { SoundsHeader } from '../../../components';
import { AudioCard } from '../../../components/AudioCard/AudioCard';
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