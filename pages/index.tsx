import Head from "next/head";
import styles from "../styles/Home.module.css";
import { fighters } from "../models/Fighter";
import Link from "next/link";
import { Fighter } from "../components/fighter";



export default function Home() {


  return (



    <div className={styles.container}>

      <div className={styles.title}>
        <p>Super Fighters</p>
      </div>
      <div className={styles.grid}>
        {fighters.map((fighter) => {
          return (
            <div>
              <Fighter fighter={fighter} key={fighter.name} />
              <Link href={{
                pathname: '/fight/[id]',
                query: { id: fighter.id }
              }}>
                <button className={styles.button_display}>Click me</button>
              </Link>
            </div>

          )
        })}
      </div>
    </div>

  );
}
