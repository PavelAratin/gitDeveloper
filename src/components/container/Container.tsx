import React from 'react';
import styles from './Container.module.css';


type ChildrenTypeProps = {
  children: React.ReactNode
}

const Container = ({ children }: ChildrenTypeProps) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}


export default Container;
