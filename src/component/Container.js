import {useTheme} from '../context/ThemeContext'

import MyButton from './MyButton'
import Profile from './Profile';

function Container() {
  const {theme} = useTheme();
  return (
    <div className={`app ${theme}`}>
      <MyButton/>
      <br />
      <Profile />
    </div>
  )
}

export default Container
