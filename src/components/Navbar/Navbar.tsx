import { Link } from 'react-router-dom';
import { Icon, colors } from '@alanpinhon/deep-feels-ui';
import './NavbarStyles.css';

export const Navbar = () => {
  return (
    <div style={{backgroundColor: colors.lightPurple[200]}} className="navbar-container">
      <Link to="/home">
        <Icon name="HomeIcon" size="lg" stroke=""/>
      </Link>
      <Link to="/explore">
        <Icon name="CompassIcon" size="lg" stroke=""/>      
      </Link>
      <Link to="/favorites">
        <Icon name="HeartIcon" size="lg" stroke="" fill='none'/>
      </Link>
      <Link to="/settings">
        <Icon name="SettingsIcon" size="lg" stroke=""/>
      </Link>
    </div>
  )
}