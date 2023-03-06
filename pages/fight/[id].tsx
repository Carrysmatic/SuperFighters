import { Fighter } from "../../components/fighter";
import { fighters, getRandomFighter } from "../../models/Fighter";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";


export default function Fight() {
  
const router = useRouter();

const selectedFighter = fighters.find(fighter => fighter.id === router.query.id);
const opponentFighter = getRandomFighter();

  return (
      <div className={styles.container}>
        <div className={styles.title}>
      <p>Fight zone</p>
      </div>
      <Fighter  fighter={opponentFighter} />
      <Fighter  fighter={selectedFighter} />
{/* 

// Add each fighter to the state of this component
// Add a button for each fighter to attack the other
// Things update /fighter updates
// Make it look pretty
// Create a page to show the winner. Passing the winner as a route param just like we did with the fighter id.
// Add a button to go back to the home page


 */}
      </div>
  );
}
