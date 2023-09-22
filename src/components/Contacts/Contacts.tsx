import React from 'react';
import styles from "./Contacts.module.scss"
import Avatar from  "/public/icons/Oval.svg"
import Avatar1 from  "/public/icons/Oval (1).svg"
import Avatar2 from  "/public/icons/Oval (2).svg"
import Avatar3 from  "/public/icons/Oval (3).svg"
import Avatar4 from  "/public/icons/Oval (4).svg"
import Avatar5 from  "/public/icons/Oval (5).svg"
import Avatar6 from  "/public/icons/Oval (6).svg"
import Avatar7 from  "/public/icons/Oval (7).svg"
import Avatar8 from  "/public/icons/Oval (8).svg"
import Avatar9 from  "/public/icons/Oval (9).svg"


export type People = {
    avatar: string,
    name: string
}

export const peopleList: People[] =
[
    {avatar: Avatar,
     name: "Кравцова Александра",
    },
    {avatar: Avatar9,
        name: "Рожков Денис ",
    },
    {avatar: Avatar,
        name: "Кравцова Александра",
    },
    {avatar: Avatar8,
        name: "Диброва Алевтина",
    },
    {avatar: Avatar1,
        name: "Иванов Дмитрий",
    },

    {avatar: Avatar2,
        name: "nosikov@list.ru",
    },
    {avatar: Avatar3,
        name: "Форс Александр",
    },
    {avatar: Avatar4,
        name: "Ахмедов Артур",
    },
    {avatar: Avatar5,
        name: "Блажевич Игорь",
    },
    {avatar: Avatar6,
        name: "Валиева Руфина",
    },
    {avatar: Avatar7,
        name: "Волошина Виктория",
    },
    {avatar: Avatar7,
        name: "Волошина Виктория",
    },
]





function Contacts () {

    return (


            <>{peopleList.map((obj) => <>
                <div className={styles.container} >
                    <img className={styles.img} src={obj.avatar} alt="Аватар">{}</img>
                    <span className={styles.name}>{obj.name}</span>
                    <button className={styles.sendBtn}>
                        <svg className={styles.icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8812 0.641118C15.7427 0.486119 15.5243 0.444557 15.3434 0.523619L0.280984 7.11732C0.11411 7.19044 0.00442342 7.35388 0.000360952 7.53638C-0.00370152 7.71856 0.0984852 7.88669 0.262234 7.96731L3.85877 9.73605L4.75501 15.1129C4.78407 15.3169 4.94438 15.481 5.15313 15.5107C5.30313 15.5322 5.45219 15.4794 5.55532 15.3732L8.39467 12.5338L12.4465 15.4282C12.5765 15.5207 12.744 15.541 12.8915 15.4826C13.0393 15.4241 13.1474 15.2944 13.1787 15.1385L15.9912 1.04486C16.019 0.905179 15.983 0.755492 15.8812 0.641118ZM4.23002 8.87387L1.5816 7.57138L12.0446 2.9911L4.23002 8.87387ZM5.69688 10.2673L5.26094 12.447L4.79064 9.62511L10.5397 5.29733L5.82469 10.0282C5.75844 10.0945 5.71438 10.1807 5.69688 10.2673ZM5.98219 13.6204L6.47406 11.162L7.62124 11.9813L5.98219 13.6204ZM12.4012 14.2435L6.87843 10.2989L14.7681 2.38298L12.4012 14.2435Z" fill="#4198C5"/>
                        </svg>
                    </button>
                </div>
            </>)}</>

    );
}

export default Contacts;

