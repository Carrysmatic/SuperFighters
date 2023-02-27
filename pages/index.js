import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  function handleClick() {}

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
      <p>Super Fighters</p>
      </div>
      <div>
        <button onClick={handleClick} className={styles.card}><p>Choose your fighter</p></button>
      </div>
      <div className={styles.heroContainer}>
        <div className={styles.row}>
          <div className={styles.col1}></div>
          <div className={styles.col2}></div>
          <div className={styles.col3}></div>
        </div>
        <button className={styles.card}>Fight!</button>
      </div>
      </div>
    </>
  );
}
