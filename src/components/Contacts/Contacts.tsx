import React from 'react';
import styles from "./Contacts.module.scss"
import Avatar from  "/public/icons/Oval.svg"
import Rectangle from  "/public/icons/Rectangle.svg"


const Contacts: React.FC= () => {
    return (
        <div className={styles.container} >

            <img className={styles.img} src={Avatar} alt="Аватар">{}</img>
            <span className={styles.name}>Кравцова Александра</span>
        </div>
    );
};

export default Contacts;

