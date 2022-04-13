import React, { useContext } from 'react'
import './toggle.css'
import Sun from '../../img/sun.png'
import { BsFillMoonFill } from 'react-icons/bs'
import { ThemeContext } from '../../context'

export default function Toggle() {
  const theme = useContext(ThemeContext)

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' })
  }

  return (
    <div className="t">
      <img src={Sun} alt="" className="t-icon" />

      <BsFillMoonFill />

      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  )
}
