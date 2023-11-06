import styles from './Button.module.css';

interface ButtonProps {
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ type, children }: ButtonProps) => {
  return (
    <button
      className={styles.button}
      type={type}
    >{children}</button>
  )
}


export default Button;