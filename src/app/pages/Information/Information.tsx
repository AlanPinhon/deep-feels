import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Input, Text } from '@alanpinhon/deep-feels-ui';
import './InformationStyles.css';

export const Information = () => {

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  const onChangeName = ({target}:ChangeEvent<HTMLInputElement>) =>  setNameValue(target.value);
  const onChangeEmail = ({target}:ChangeEvent<HTMLInputElement>) =>  setEmailValue(target.value);

  return (
    <div className="container">

      <Link className='back-btn' to="/settings">
        <Icon name='ArrowLeftIcon' size='sm'/>
      </Link>

      <Text variant='h3'>Información</Text>

      <div className="img-container">
        <div className="user-img-info">
          <Icon name='UserIcon' size='lg'/>
        </div>
        
        <Icon
          style={{position: 'absolute', right: '0', bottom: '2rem'}}
          name='CameraIcon'
          size='sm'
          background/>
      </div>

      <form className='info-user-form' action="">
        <Text variant='label'>
          Nombre
          <Input type='text' placeholder='Eduardo Gonzalez' value={nameValue} onChange={onChangeName}/>  
        </Text>
        <Text variant='label'>
          Email
          <Input type='email' placeholder='usuario@correo.com' value={emailValue} onChange={onChangeEmail}/>  
        </Text>
      </form>

      <Button style={{margin: '1rem 0'}} variant='primary' onClick={() => console.log('Cambios guardados')}>Guardar cambios</Button>

      <Button style={{margin: '1rem 0'}} variant='error' onClick={() => console.log('Cambios restaurados')}>Cancelar</Button>

    </div>
  )
}