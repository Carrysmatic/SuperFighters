import Head from "next/head";
import styles from "../styles/Home.module.css";
import { fighters } from "../models/Fighter";
import Link from "next/link";
import { Fighter } from "../components/fighter";


//Some things before we can say this is done:
//- back button on winner page - done
//- fix style on winner page -done
//- change winner winner chicken dinner to something nicer - done
//- Add a combat log (???)
//- Look into some animations, decide on what you want first like a brr.  - HTF 

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
