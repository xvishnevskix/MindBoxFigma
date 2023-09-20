import React from 'react';
import Search from "../components/Search/Search";
import MiddleMenu from "../components/MiddleMenu/MiddleMenu";

const Home:React.FC= () => {
    return (
        <main className="main">
            <section className="main__content">
                <div className="left">
                        <Search/>
                        <MiddleMenu/>
                        <Contacts/>
                </div>
                <div className="right">1</div>
            </section>
        </main>
    );
};

export default Home;