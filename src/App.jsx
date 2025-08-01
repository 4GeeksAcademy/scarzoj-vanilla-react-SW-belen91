
// Importamos los componentes de React Router para definir rutas: Routes (contenedor de todas las rutas) y Route (define cada ruta individual)

import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { pages } from "./router/pages";
import { NavBar } from "./components/Navbar";

export const App = () => {
    return (
        <>

{/* Mostramos la barra de navegación en todas las rutas */}

            <NavBar />

{/* Contenedor principal de la aplicación */}

            <main className="app-container">
                <Routes>
                    {pages.map((page) => {
                        return (
                            <Route path={page.route}    // Ruta (ej. "/details/:type/:id")
                            key={page.route}            // Clave única basada en la ruta
                            element={page.component} /> // Componente que se renderiza si la ruta coincide
                        )
                    })}

{/* Si ninguna ruta coincide, mostramos la HomePage por defecto */}

                    <Route path="*" element={<HomePage />} />
                </Routes>
            </main>
        </>
    );
};
