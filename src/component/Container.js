import {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

import MyButton from './MyButton'
import Profile from './Profile';

function Container() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <MyButton/>
      <br />
      <Profile />
    </div>
  )
}

export default Container
