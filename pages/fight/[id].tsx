import { Fighter } from "../../components/fighter";
import { fighters, FighterShape, getRandomFighter } from "../../models/Fighter";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FighterFight } from "../../components/fighter/fighter";


//ruber ducking 
// feat. prin useEffect - re-read 
// polish (cooldown, healthbar, attack animation, death animation, winner animation, fighter sele)
// [] cu iconita - if attack in on cd - number + fundal / overlay, absolute positioning / cul transp / textul nu 

const calculateDamage = (attacker: FighterShape, defender: FighterShape) => {
  return attacker.attack - defender.defense / 2;
};

//max as = 10 . 1 tick = 100ms 
// as 10 = 1 tick / as 1 = 10 ticks / as 0.5 =20 ticks

const attackCooldown = (fighter: FighterShape) => {
  const attackCooldown = 1 / fighter.attackSpeed * 10;
  return ({
    ...fighter,
    attackCooldown: attackCooldown,
  });
};



export default function Fight() {
  const router = useRouter();
  const [fightInProgress, setFightInProgress] = useState(false);
  const [tick, setTick] = useState(0);
  const [selectedFighter, setSelectedFighter] = useState(
    fighters.find(
      (fighter) => fighter.id === router.query.id
    )
  );
  const [opponentFighter, setOpponentFighter] = useState(getRandomFighter());



  const XstartFight = useCallback(() => {
    if (fightInProgress === true) {
      return;
    }
    setFightInProgress(true);
    setTick(1);
  }, [setFightInProgress, setTick])

  // fight/archer
  // fight/winner/archer


  useEffect(() => {
    if (tick === 0 || fightInProgress === false) {
      return;
    }

    let fighter = { ...selectedFighter };
    let opponent = { ...opponentFighter };

    if (fighter.attackCooldown === 0) {
      opponent = {
        ...opponent,
        health: opponent.health - calculateDamage(fighter, opponent)
      };// newOpponent has {health 1}. opponentFighter has health 2
      fighter = attackCooldown(fighter);
      if (opponent.health <= 0) {
        setFightInProgress(false);
        router.push(`/winner/${selectedFighter.id}`);
      }
    }

    // If opponent dies in the above attack, it will be alive for this one
    // This may not be intended.
    if (opponent.attackCooldown === 0) {
      fighter = {
        ...fighter,
        health: fighter.health - calculateDamage(opponent, fighter)
      };
      opponent = attackCooldown(opponent);

      if (fighter.health <= 0) {
        setFightInProgress(false);
        router.push(`/winner/${opponentFighter.id}`);
      }
    }

    fighter = decreseCooldown(fighter);
    opponent = decreseCooldown(opponent);

    console.table(fighter)
    console.table(opponent)

    setSelectedFighter(fighter);
    setOpponentFighter(opponent);

    console.log("A Tick happened", tick);
    setTimeout(() => {
      setTick(tick + 1);
    }, 100);
  }, [tick]);

function decreseCooldown(fighter: FighterShape) {
  if (fighter.attackCooldown > 0) {
    return {
      ...fighter,
      attackCooldown: fighter.attackCooldown - 1,
    }
  }
  return fighter;
}

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Fight zone</p>
      </div>
      <div className={styles.fighterArena}>
      <FighterFight fighter={opponentFighter} />
      <br/>
      {!fightInProgress && <button onClick={XstartFight} className={styles.button}> Start Fight</button>}
      <FighterFight fighter={selectedFighter} />
      </div>
      {/* 


// Add a button to go back to the home page - WIP 
// exploding confetti - WIP - https://www.npmjs.com/package/react-confetti


 */}
    </div>
  );
}
