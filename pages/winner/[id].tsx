import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { Fighter } from "../../components/fighter";
import { fighters } from "../../models/Fighter";


export default function Winner () {
    const router = useRouter();
    const fighter = fighters.find(
        (fighter) => fighter.id === router.query.id
      );

    return (
        <>
        <h1>Winner winner chicken dinner</h1>
        <Fighter fighter={fighter}/>
        </>
    )
}