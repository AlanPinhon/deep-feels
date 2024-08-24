import { useContext } from 'react';
import { AuthContext } from '../../../auth/context/AuthContext';
import { Button, colors, Icon, Text } from '@alanpinhon/deep-feels-ui';
import './SettingsStyles.css';
import { Link } from 'react-router-dom';

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

      <div className='menu-container'>
        <Link className='menu-option' to='/settings/info'>
          <Icon name='UserIcon' size='lg' background style={{marginRight: "1rem"}}/> 
          <Text htmlFor='light-theme' variant='sm' color={colors.purple[500]} style={{display: 'flex', flexDirection: "row-reverse", alignItems: "center"}}>
            Información personal
          </Text>
          <Icon name='ArrowRightIcon' size='lg'/>
        </Link>

        <Link className='menu-option' to='/settings/change-password'>
          <Icon name='LockIcon' size='lg' background style={{marginRight: "1rem"}}/>
          <Text htmlFor='dark-theme' variant='sm' color={colors.purple[500]} style={{display: 'flex', flexDirection: "row-reverse", alignItems: "center"}}>
            Cambiar contraseña
          </Text>
          <Icon name='ArrowRightIcon' size='lg'/>
        </Link>

        <Link className='menu-option' to='/settings/appearance'>
          <Icon name='ThemeIcon' size='lg' background style={{marginRight: "1rem"}}/>
          <Text htmlFor='device-theme' variant='sm' color={colors.purple[500]} style={{display: 'flex', flexDirection: "row-reverse", alignItems: "center"}}>
            Apariencia
          </Text>
          <Icon name='ArrowRightIcon' size='lg'/>
        </Link>

      </div>

      <Button style={{margin: '2rem 0'}} variant='error' onClick={onLogout}>Cerrar Sesión</Button>
    </div>
  )
}