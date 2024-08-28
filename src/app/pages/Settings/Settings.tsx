import { useContext } from 'react';
import { AuthContext } from '../../../auth/context/AuthContext';
import { Button, colors, Icon, Text } from '@alanpinhon/deep-feels-ui';
import { Link } from 'react-router-dom';
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
        <Icon name='UserIcon' size='lg'/>
      </div>

      <div className="user-info-container">
        <Text variant='lg' >Alan Piñón</Text>
        <Text variant='sm'>alanpinon@email.com</Text>
      </div>

      <div className='menu-container'>
        <Link className='menu-option' to='/settings/info'>
          <Icon name='UserIcon' size='sm' background style={{marginRight: "1rem"}}/> 
          <Text htmlFor='light-theme' variant='sm' color={colors.purple[500]} style={{display: 'flex', flexDirection: "row-reverse", alignItems: "center"}}>
            Información personal
          </Text>
          <Icon name='ArrowRightIcon' size='sm'/>
        </Link>

        <Link className='menu-option' to='/settings/change-password'>
          <Icon name='LockIcon' size='sm' background style={{marginRight: "1rem"}}/>
          <Text htmlFor='dark-theme' variant='sm' color={colors.purple[500]} style={{display: 'flex', flexDirection: "row-reverse", alignItems: "center"}}>
            Cambiar contraseña
          </Text>
          <Icon name='ArrowRightIcon' size='sm'/>
        </Link>

        <Link className='menu-option' to='/settings/appearance'>
          <Icon name='ThemeIcon' size='sm' background style={{marginRight: "1rem"}}/>
          <Text htmlFor='device-theme' variant='sm' color={colors.purple[500]} style={{display: 'flex', flexDirection: "row-reverse", alignItems: "center"}}>
            Apariencia
          </Text>
          <Icon name='ArrowRightIcon' size='sm'/>
        </Link>

      </div>

      <Button style={{margin: '2rem 0'}} variant='error' onClick={onLogout}>Cerrar Sesión</Button>
    </div>
  )
}