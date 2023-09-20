import React from 'react';
import styles from './MiddleMenu.module.scss';

const MiddleMenu:React.FC= () => {
    return (
        <div className={styles.container}>
            <span className={styles.count}>213</span>
            <button className={styles.buttons}>Выбрать</button>
        </div>
    );
};

export default MiddleMenu;