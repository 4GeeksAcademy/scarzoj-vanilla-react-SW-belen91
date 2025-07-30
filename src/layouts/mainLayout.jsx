import { useState } from "react"
import { pages } from "../router/pages"
import { NavBar } from "../components/Navbar";

const MainLayout = () => {
    const [activePage, setActivePage] = useState("landing")

    return (
        <>
            <NavBar activePage={activePage} setActivePage={setActivePage} />
            {pages.find((page) => {
                return activePage === page.route
            }).component}
        </>
    )
}; 

export default MainLayout;      