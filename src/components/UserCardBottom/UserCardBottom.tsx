import LocationIcon from '../../assets/images/icon-location.svg';
import TwitterIcon from '../../assets/images/icon-twitter.svg';
import LinkIcon from '../../assets/images/icon-website.svg';
import CompanyIcon from '../../assets/images/icon-company.svg';

import { GithubUser } from '../../types';

import styles from './UserCardBottom.module.css';

export interface UserCardBottomProps extends Pick<
  GithubUser,
  'location' | 'company' | 'twitter_username' | 'blog'
> { };

const UserCardBottom = ({ location, company, twitter_username, blog }: UserCardBottomProps) => {
  return (
    <div className={styles['user-card-bootom']}>
      <div className={styles['user-card-bootom__item']}>
        <img src={LocationIcon} alt="location" />
        <div className={styles.text}>{location}</div>
      </div>
      <div className={styles['user-card-bootom__item']}>
        <img src={TwitterIcon} alt="TwitterIcon" />
        <div className={styles.text}>{twitter_username}</div>
      </div>
      <div className={styles['user-card-bootom__item']}>
        <img src={LinkIcon} alt="link website" />
        <div className={styles.text}>{blog}</div>
      </div>
      <div className={styles['user-card-bootom__item']}>
        <img src={CompanyIcon} alt="company" />
        <div className={styles.text}>{company}</div>
      </div>
    </div>
  )
}


export default UserCardBottom;