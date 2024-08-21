import { useContext } from 'react';
import { AuthContext } from '../../../auth/context/AuthContext';
import { Button, Icon, Text } from '@alanpinhon/deep-feels-ui';
import './SettingsStyles.css';

export const Settings = () => {
  const { logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();
  }

  return (
    <div className="container">
      <Text variant='h3'>Ajustes</Text>

      <div className="user-img-container">
        <Icon name='UserIcon' size='xl'/>
      </div>

      <div className="user-info-container">
        <Text variant='lg' >Alan Piñón</Text>
        <Text variant='sm'>alanpinon@email.com</Text>
      </div>

      <Button style={{margin: '4rem 0'}} variant='error' onClick={onLogout}>Cerrar Sesión</Button>
    </div>
  )
}