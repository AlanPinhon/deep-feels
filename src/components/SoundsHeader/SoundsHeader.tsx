import { ChangeEvent } from 'react';
import { Input, Text } from '@alanpinhon/deep-feels-ui';

type SoundsHeaderProps = {
  title: string;
  description: string;
  value: string;
  setSearchValue: (value:string) => void;
}

export const SoundsHeader = ({title, description, value, setSearchValue}:SoundsHeaderProps) => {

  const handleValue = ({target}:ChangeEvent<HTMLInputElement>) => setSearchValue(target.value);

  return ( 
    <div className="header-container">
      <Text style={{textAlign: 'start'}} variant='h2'>{title}</Text>
      <Text style={{textAlign: 'start'}} variant='sm'>{description}</Text>
      <Input type="text" withIcon="SearchIcon" value={value} onChange={handleValue} placeholder="Buscar"/>
    </div>
  )
}