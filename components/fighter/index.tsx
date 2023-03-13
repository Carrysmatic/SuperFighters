import Link from "next/link";
import { Archer, FighterShape} from "../../models/Fighter";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";

interface FighterProps {
  fighter: FighterShape;
}

export function Fighter(props: FighterProps) {
  const fighter = props.fighter


  return (

    <div className={styles.fighterBox}>
      <div>{fighter.name}</div>
      <img src={fighter.imageUrl} alt={fighter.name} className={styles.imageUrl}/>
      <div className={styles.healthBar}>Health {fighter.health}</div>
      <div className={styles.block} style={{
        width: fighter.health,
      }}></div>
      <div>Attack {fighter.attack}</div>
      <div>Defense {fighter.defense}</div>
      <div>Speed {fighter.attackSpeed}</div>
      <div>{fighter.attackCooldown}</div>
     
    </div>

  );
}

