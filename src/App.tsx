import { ChangeEvent, useEffect, useState } from 'react';
import { Alert, Button, Checkbox, Input, Text, Radio, colors, Icon, useTheme } from '@alanpinhon/deep-feels-ui';
import './App.css';

function App() {

  const {theme, setTheme, setUseDeviceTheme} = useTheme();
  const [className, setClassName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [checkRadio, setCheckRadio] = useState(localStorage.getItem('useDeviceTheme') === 'true' ? 'device' : theme);

  //Theme
  useEffect(() => {
    const bodyStyle = document.body.style;
    (theme === 'dark')
      ? bodyStyle.setProperty('background-color', colors.lightPurple[800])
      : bodyStyle.setProperty('background-color', colors.lightPurple[50])
  }, [theme]);


   // Alert
  const setAlertTime = () => {
    setClassName('active');
    setTimeout(() => {
      setClassName('');
    }, 3000);
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
      <Alert type='success' icon='CheckIcon' className={className}>I'm an alert</Alert>
      <Button variant='primary' onClick={setAlertTime} style={{margin: "2rem 0"}} disabled={(className === 'active')}>Show alert</Button>

      <div className='checkbox-container'> 
        <Text htmlFor='checkbox-login' variant='label' color={(theme === 'dark') ? colors.neutralColors.white : colors.purple[500]} style={{display: 'flex', alignItems: "center"}}>
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
          <Icon name='LightIcon' size='lg' background stroke={(theme === 'dark') ? colors.neutralColors.white : colors.purple[500]} style={{marginRight: "1rem"}}/> 
          <Text htmlFor='light-theme' variant='label' color={(theme === 'dark') ? colors.neutralColors.white : colors.purple[500]} style={{display: 'flex', flexDirection: "row-reverse", alignItems: "center"}}>
              <Radio id='light-theme' name='theme' value='light' onChange={handleRadioCheck} checked={checkRadio === 'light'} style={{marginLeft: "5rem"}}/>
            Light Theme
          </Text>
        </div>
        <div className='menu-option'>
          <Icon name='DarkIcon' size='lg' background stroke={(theme === 'dark') ? colors.neutralColors.white : colors.purple[500]} style={{marginRight: "1rem"}}/>
          <Text htmlFor='dark-theme' variant='label' color={(theme === 'dark') ? colors.neutralColors.white : colors.purple[500]} style={{display: 'flex', flexDirection: "row-reverse", alignItems: "center"}}>
              <Radio id='dark-theme' name='theme' value='dark' onChange={handleRadioCheck} checked={checkRadio === 'dark'} style={{marginLeft: "5rem"}}/>
            Dark Theme
          </Text>
        </div>
        <div className='menu-option'>
          <Icon name='MobileIcon' size='lg' background stroke={(theme === 'dark') ? colors.neutralColors.white : colors.purple[500]} style={{marginRight: "1rem"}}/>
          <Text htmlFor='device-theme' variant='label' color={(theme === 'dark') ? colors.neutralColors.white : colors.purple[500]} style={{display: 'flex', flexDirection: "row-reverse", alignItems: "center"}}>
              <Radio id='device-theme' name='theme' value='device' onChange={handleRadioCheck} checked={checkRadio === 'device'} style={{marginLeft: "5rem"}}/>
            Theme device
          </Text>
        </div>
      </div>

      <div className='menu-container'>
        <div onClick={() => alert('A la pantalla de información del usuario')} className='menu-option'>
          <Icon name='UserIcon' size='lg' background stroke={(theme === 'dark') ? colors.neutralColors.white : colors.purple[500]} style={{marginRight: "1rem"}}/> 
          <Text variant='sm' color={(theme === 'dark') ? colors.neutralColors.white : colors.purple[500]}>Personal information</Text>
          <Icon name='ArrowRightIcon' size='lg' stroke={(theme === 'dark') ? colors.neutralColors.white : colors.purple[500]}/> 
        </div>
        <div onClick={() => alert('A la pantalla de selección del tema')} className='menu-option'>
          <Icon name='ThemeIcon' size='lg' background stroke={(theme === 'dark') ? colors.neutralColors.white : colors.purple[500]} style={{marginRight: "1rem"}}/>
          <Text variant='sm' color={(theme === 'dark') ? colors.neutralColors.white : colors.purple[500]}>Appearance</Text>
          <Icon name='ArrowRightIcon' size='lg' stroke={(theme === 'dark') ? colors.neutralColors.white : colors.purple[500]}/>
        </div>
      </div>
    </>
  )
}

export default App;