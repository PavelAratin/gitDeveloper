import styles from './ButtonHeader.module.css';
import sunIcon from '../../../assets/images/icon-sun.svg';
import moonIcon from '../../../assets/images/icon-moon.svg';

interface ButtonProps {
  isDark: boolean,
  themeToggleHandler: () => void
}
const ButtonHeader = ({ isDark, themeToggleHandler }: ButtonProps) => {
  const themeIcon = isDark ? sunIcon : moonIcon;
  const themeText = isDark ? 'light' : 'dark';

  const onClickHandler = () => {
    themeToggleHandler()
  }

  return (
    <button className={styles.button} onClick={onClickHandler}>
      <span className={styles['button__text']}>{themeText}</span>
      <img src={themeIcon} alt="Темная картинка" />
    </button>
  )
}


export default ButtonHeader;