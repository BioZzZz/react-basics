import styles from "./notFoundPage.module.css";

export const NotFoundPage = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div>Уууупс! Такой страницы не существует.</div>
      </div>
    </div>
  );
};
