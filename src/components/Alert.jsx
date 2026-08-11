import styles from './Alert.module.css';

export const Alert = ({ type = 'success', children }) => {
  return <div className={`${styles.alert} ${styles[type]}`}>{children}</div>;
};

// remember, the outer curly braces for the style prop is for jsx, and the inner one is for the actual object
