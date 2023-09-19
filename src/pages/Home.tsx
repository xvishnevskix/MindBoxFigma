import React from 'react';
import Search from "../components/Search/Search";

const Home:React.FC= () => {
    return (
        <main className="main">
            <section className="main__content">
                <div className="left">
                        <Search/>
                    <div className="left__middle">2</div>
                    <div className="left__items">3</div>
                </div>
                <div className="right">1</div>
            </section>
        </main>
    );
};

export default Home;