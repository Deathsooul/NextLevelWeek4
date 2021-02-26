import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/deathsooul.png" alt="Wallace Bescrovaine" />
            <div>
                <strong>Wallace Bescrovaine</strong>                
                <p>
                    <img src="icons/level.svg" alt="Level" />
                </p>
            </div>
        </div>

    );
}