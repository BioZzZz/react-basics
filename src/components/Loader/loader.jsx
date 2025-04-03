import styles from "./loader.module.css";

export const Loader = ({ text }) => {
  return <div className={styles.container}>{text}</div>;
};
