import styles from "./Loader.module.css";

export const Loader: React.FC = () => {
  return (
    <div className={styles.Loader}>
      <div className={styles.left}></div>
      <div className={styles.right}></div>
    </div>
  );
};
