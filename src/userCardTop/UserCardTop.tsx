import { GithubUser } from '../types';
import { getDate } from '../utils/getDate';
import styles from './UserCardTop.module.css';

export interface UserTopProps extends Pick<
  GithubUser,
  'bio' | 'name' | 'login' | 'created_at'
> { };

const UserCardTop = ({ bio, name, login, created_at }: UserTopProps) => {
  console.log('created_at', typeof created_at);

  return (
    <div className={styles['card-top']}>
      <div className={styles['card-top-wrapper']}>
        <div className={styles['card-top-info']}>
          <h3 className={styles.title}>{name}</h3>
          <span className={styles.subtitle}>{login}</span>
        </div>
        <div className={styles['date-created']}>{getDate(created_at)}</div>
      </div>
      <div className={styles.stack}>{bio}</div>
    </div>
  )
}


export default UserCardTop;