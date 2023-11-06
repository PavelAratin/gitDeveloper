import { GithubUser } from '../../types';
import styles from './UserStat.module.css';

export interface UserStatPops extends Pick<
  GithubUser,
  'public_repos' | 'followers' | 'following'
> { };

const UserStat = ({ public_repos, followers, following }: UserStatPops) => {
  return (
    <div className={styles['user-stat']}>
      <div className={styles['user-stat__item']}>
        <div className={styles['user-stat__title']}>Repos</div>
        <div className={styles['user-stat__number']}>{public_repos}</div>
      </div>
      <div className={styles['user-stat__item']}>
        <div className={styles['user-stat__title']}>Following</div>
        <div className={styles['user-stat__number']}>{following}</div>
      </div>
      <div className={styles['user-stat__item']}>
        <div className={styles['user-stat__title']}>Followers</div>
        <div className={styles['user-stat__number']}>{followers}</div>
      </div>
    </div>
  )
}


export default UserStat;