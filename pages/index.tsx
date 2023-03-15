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
      <div className={styles.fighterGrid}>
        {fighters.map((fighter) => {
          return (
            <div>
              <Fighter fighter={fighter} key={fighter.name} />
                
                <button className={styles.button_display}>
                <Link href={{
                pathname: '/fight/[id]',
                query: { id: fighter.id }
              }}>   Select Fighter   </Link>
                </button>
        
            </div>

          )
        })}
      </div>
    </div>

  );
}
