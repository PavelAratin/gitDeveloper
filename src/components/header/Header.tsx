
import ThemeToogle from '../themeToogle/ThemeToogle';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles['header__list']}>
        <li>
          <div>DevFinder</div>
        </li>
        <li>
          <ThemeToogle></ThemeToogle>
        </li>
      </ul>
    </header>
  )
}


export default Header;