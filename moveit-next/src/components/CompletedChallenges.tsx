import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges(){
    return(
        <div className={styles.CompletedChallengesContainer}>
            <span>Desafios completos</span>
            <span>6</span>

        </div>
    );
}