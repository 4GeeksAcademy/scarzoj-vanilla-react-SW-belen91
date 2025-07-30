import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { pages } from "./router/pages";
import { NavBar } from "./components/Navbar";

export const App = () => {
    return (
        <>
            <NavBar />
            <main className="app-container">
                <Routes>
                    {pages.map((page) => {
                        return (
                            <Route path={page.route} 
                            key={page.route} 
                            element={page.component} />
                        )
                    })}
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </main>
        </>
    );
};
