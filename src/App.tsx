import MainLayout from "./layouts/MainLayout";
import './scss/app.scss'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<Home />}/>
            </Route>
        </Routes>
    );
};
