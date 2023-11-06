import styles from './Error.module.css';

interface ErrorProps {
  text: string
}
const Error = ({ text }: ErrorProps) => {
  return (
    <span className={styles.error}>{text}</span>
  )
}


export default Error;