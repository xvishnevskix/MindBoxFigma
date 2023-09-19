
import React from "react";
import Header from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import styles from './MainLayout.module.scss';

const MainLayout:React.FC = () => {
    return (
        <>

            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default MainLayout