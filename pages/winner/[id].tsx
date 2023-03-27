import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { Fighter } from "../../components/fighter";
import { fighters } from "../../models/Fighter";
import Link from "next/link";
import { FighterFight } from "../../components/fighter/fighter";


export default function Winner () {
    const router = useRouter();
    const fighter = fighters.find(
        (fighter) => fighter.id === router.query.id
      );



    return (
        <div className={styles.container}>
        <h1>Winner</h1>
        <h2>{fighter.name}</h2>
        <img src={fighter.imageUrl} alt={fighter.name} className={styles.fighterBox1} />
        {/* <FighterFight fighter={fighter}/> */}

        <button className={styles.button_display}>
        <Link href={{
        pathname: '/',
        query: { id: fighter.id }
        }}>   Back to Tavern   </Link>
        </button>
        </div>
    )
}