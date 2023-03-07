import { Fighter } from "../../components/fighter";
import { fighters, FighterShape, getRandomFighter } from "../../models/Fighter";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";

// Will return a defender with modified health after the attack
const performAttack = (attacker: FighterShape, defender: FighterShape) => {
  const damage = attacker.attack - defender.defense / 2;

  return ({
    ...defender,
    health: defender.health - Math.max(0, damage),
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
    setFightInProgress(true);
    setTick(1);
  }, [setFightInProgress, setTick])



  useEffect(() => {
    if (tick === 0 || fightInProgress === false) {
      return;
    }
    const newOpponent = performAttack(selectedFighter, opponentFighter);
    setOpponentFighter(newOpponent);

    // If opponent dies in the above attack, it will be alive for this one
    // This may not be intended.

    const newSelected = performAttack(opponentFighter, selectedFighter)
    setSelectedFighter(newSelected);
    if (newOpponent.health <= 0) {
      setFightInProgress(false);
      router.push(`/winner/${selectedFighter.id}`);
    }
    if (newSelected.health <= 0) {
      setFightInProgress(false);
      router.push(`/winner/${opponentFighter.id}`);
    }
    setTimeout(() => {
      setTick(tick + 1);
    }, 1000);
  }, [tick]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Fight zone</p>
      </div>
      <Fighter fighter={opponentFighter} />
      <button onClick={XstartFight}> Start Fight</button>
      <Fighter fighter={selectedFighter} />
      {/* 

// attackCooldown - WIP
// Make it look  better - WIP
// /winner page creating - WIP /  congratz fighter won  
// Add a button to go back to the home page - WIP 
// exploding confetti - WIP - https://www.npmjs.com/package/react-confetti


 */}
    </div>
  );
}