import { useState } from "react"
import { pages } from "../router/pages"
import { NavBar } from "../components/Navbar";

// Este componente es el layout principal de la aplicación. Se encarga de mostrar la barra de navegación y, según lo que el usuario elija, la página correspondiente.

const MainLayout = () => {

    //Estado local que guarda qué página está activa en ese momento. Por defecto, empieza en la ruta "landing".
    
    const [activePage, setActivePage] = useState("landing")

    return (
        <>
            {/* Renderizamos la barra de navegación, pasándole la página activa actual
                y la función para cambiarla. Así, al hacer clic en un botón del NavBar,
                podrá cambiarse el contenido mostrado aquí abajo.
            */}

            <NavBar activePage={activePage} setActivePage={setActivePage} />

            {/* Buscamos en el array `pages` cuál es la página que coincide con `activePage`
                y mostramos su componente.
                Ojo: esto asume que cada objeto `page` tiene una propiedad `route` y una `component`.
            */}
            
            {pages.find((page) => {
                return activePage === page.route
            }).component}
        </>
    )
}; 

export default MainLayout;      