import { ChangeEvent, useEffect, useState } from 'react';
import { Alert, Button, Checkbox, Input, Text, Radio, colors, Icon, useTheme } from '@alanpinhon/deep-feels-ui';
import './App.css';

function App() {
  
  const {theme, setTheme, setUseDeviceTheme, isDarkTheme} = useTheme();
  const [visible, setVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [checkRadio, setCheckRadio] = useState(localStorage.getItem('useDeviceTheme') === 'true' ? 'device' : theme);
  
  //Theme
  useEffect(() => {
    const bodyStyle = document.body.style;
    bodyStyle.setProperty('background-color', isDarkTheme ? colors.lightPurple[800] : colors.lightPurple[50]);
  }, [isDarkTheme]);
  
  // Alert
  const showAlert = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  };

  // Checkbox
  const handleChecked = () => setIsChecked(!isChecked);
  
  // Input
  const onChangeValue = ({ target }: ChangeEvent<HTMLInputElement>) => setInputValue(target.value);
  
  // Radio
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
    <>
      <Alert type='success' icon='CheckIcon' mounted={visible}>I'm an alert</Alert>
      <Button variant='primary' onClick={showAlert} style={{margin: "2rem 0"}} disabled={visible}>Show alert</Button>

      <div className='checkbox-container'> 
        <Text htmlFor='checkbox-login' variant='label' color={colors.purple[500]} style={{display: 'flex', alignItems: "center"}}>
          <Checkbox id='checkbox-login' name='checkbox-login' checked={isChecked} onChange={handleChecked}/>
          Remind Me
        </Text>
      </div>

      <Input
        onChange={onChangeValue}
        type='text'
        placeholder='Ingresa tu nombre'
        value={inputValue}
        withIcon='SearchIcon'
        style={{margin: "2rem 0"}}
      />

      <div className='menu-container'>
        <div className='menu-option'>
          <Icon name='LightIcon' size='lg' background style={{marginRight: "1rem"}}/> 
          <Text htmlFor='light-theme' variant='label' color={colors.purple[500]} style={{display: 'flex', flexDirection: "row-reverse", alignItems: "center"}}>
              <Radio id='light-theme' name='theme' value='light' onChange={handleRadioCheck} checked={checkRadio === 'light'} style={{marginLeft: "5rem"}}/>
            Light Theme
          </Text>
        </div>
        <div className='menu-option'>
          <Icon name='DarkIcon' size='lg' background style={{marginRight: "1rem"}}/>
          <Text htmlFor='dark-theme' variant='label' color={colors.purple[500]} style={{display: 'flex', flexDirection: "row-reverse", alignItems: "center"}}>
              <Radio id='dark-theme' name='theme' value='dark' onChange={handleRadioCheck} checked={checkRadio === 'dark'} style={{marginLeft: "5rem"}}/>
            Dark Theme
          </Text>
        </div>
        <div className='menu-option'>
          <Icon name='MobileIcon' size='lg' background style={{marginRight: "1rem"}}/>
          <Text htmlFor='device-theme' variant='label' color={colors.purple[500]} style={{display: 'flex', flexDirection: "row-reverse", alignItems: "center"}}>
              <Radio id='device-theme' name='theme' value='device' onChange={handleRadioCheck} checked={checkRadio === 'device'} style={{marginLeft: "5rem"}}/>
            Theme device
          </Text>
        </div>
      </div>

      <div className='menu-container'>
        <div onClick={() => alert('A la pantalla de información del usuario')} className='menu-option'>
          <Icon name='UserIcon' size='lg' background style={{marginRight: "1rem"}}/> 
          <Text variant='sm' color={colors.purple[500]}>Personal information</Text>
          <Icon name='ArrowRightIcon' size='lg'/> 
        </div>
        <div onClick={() => alert('A la pantalla de selección del tema')} className='menu-option'>
          <Icon name='ThemeIcon' size='lg' background style={{marginRight: "1rem"}}/>
          <Text variant='sm' color={colors.purple[500]}>Appearance</Text>
          <Icon name='ArrowRightIcon' size='lg'/>
        </div>
      </div>
    </>
  )
}

export default App;