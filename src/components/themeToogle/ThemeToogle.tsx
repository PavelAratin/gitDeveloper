// import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { useState, useEffect } from 'react';

import styles from './ThemeToogle.module.css';
import ButtonHeader from '../buttons/buttonHeader/ButtonHeader';

const ThemeToogle = () => {
  const [isDark, setIsDark] = useState(false);

  const themeToggleHandler = () => {
    setIsDark(previousState => !previousState)
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark')
  }, [isDark])

  return (
    <div className={styles.theme}>
      <ButtonHeader themeToggleHandler={themeToggleHandler} isDark={isDark}></ButtonHeader>
    </div>
  )
}


export default ThemeToogle;