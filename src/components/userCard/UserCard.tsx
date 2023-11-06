import { GithubUser } from '../../types';
import UserCardTop from '../../userCardTop/UserCardTop';
import UserCardBottom from '../UserCardBottom/UserCardBottom';
import UserStat from '../userStat/UserStat';
import styles from './UserCard.module.css';


interface UserCardProps extends GithubUser { }

const UserCard = (props: UserCardProps) => {
  console.log('props', props);

  return (
    <div className={styles['user-card']}>
      <div className={styles['user-card__left']}>
        <img className={styles.images} src={props.avatar_url} alt="Аватар пользователя" />
      </div>
      <div className={styles['user-card__right']}>
        <UserCardTop {...props}></UserCardTop>
        <UserStat
          public_repos={props.public_repos}
          followers={props.followers}
          following={props.following}
        ></UserStat>
        <UserCardBottom {...props}></UserCardBottom>
      </div>
    </div>
  )
}


export default UserCard;