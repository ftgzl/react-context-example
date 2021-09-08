import {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

import MyButton from './MyButton'

function Container() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <MyButton/>
    </div>
  )
}

export default Container
