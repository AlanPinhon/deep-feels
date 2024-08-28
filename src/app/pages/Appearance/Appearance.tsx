import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Radio, Text, colors, useTheme } from '@alanpinhon/deep-feels-ui';

export const Appearance = () => {

  const {theme, setTheme, setUseDeviceTheme} = useTheme();
  const [checkRadio, setCheckRadio] = useState(localStorage.getItem('useDeviceTheme') === 'true' ? 'device' : theme);

  const handleRadioCheck = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setCheckRadio(value);
    if (value === 'device') {
      setUseDeviceTheme(true);
      localStorage.setItem('useDeviceTheme', 'true');
    } else {
      setUseDeviceTheme(false);
      setTheme(value);
      localStorage.setItem('theme', value);
      localStorage.setItem('useDeviceTheme', 'false');
    }
  };

  return (
    <div className="container">

      <Link className='back-btn' to="/settings">
        <Icon name='ArrowLeftIcon' size='sm'/>
      </Link>

      <Text variant='h3'>Apariencia</Text>

      <div className='menu-container'>
        <div className='menu-option'>
          <Icon name='LightIcon' size='sm' background style={{marginRight: "1rem"}}/> 
          <Text htmlFor='light-theme' variant='label' color={colors.purple[500]} style={{display: 'flex', flexDirection: "row-reverse", alignItems: "center"}}>
              <Radio id='light-theme' name='theme' value='light' onChange={handleRadioCheck} checked={checkRadio === 'light'} style={{marginLeft: "5rem"}}/>
            Light Theme
          </Text>
        </div>
        <div className='menu-option'>
          <Icon name='DarkIcon' size='sm' background style={{marginRight: "1rem"}}/>
          <Text htmlFor='dark-theme' variant='label' color={colors.purple[500]} style={{display: 'flex', flexDirection: "row-reverse", alignItems: "center"}}>
              <Radio id='dark-theme' name='theme' value='dark' onChange={handleRadioCheck} checked={checkRadio === 'dark'} style={{marginLeft: "5rem"}}/>
            Dark Theme
          </Text>
        </div>
        <div className='menu-option'>
          <Icon name='MobileIcon' size='sm' background style={{marginRight: "1rem"}}/>
          <Text htmlFor='device-theme' variant='label' color={colors.purple[500]} style={{display: 'flex', flexDirection: "row-reverse", alignItems: "center"}}>
              <Radio id='device-theme' name='theme' value='device' onChange={handleRadioCheck} checked={checkRadio === 'device'} style={{marginLeft: "5rem"}}/>
            Theme device
          </Text>
        </div>
      </div>
    </div>
  )
}