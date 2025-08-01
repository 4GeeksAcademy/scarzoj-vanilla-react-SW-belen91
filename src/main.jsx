
// Importamos StrictMode, una herramienta de desarrollo de React que ayuda a detectar errores y prácticas no recomendadas --> no se muestra en pantalla, pero activa advertencias útiles en consola sobre prácticas dudosas o que van a cambiar en el futuro.
// createRoot es el nuevo método para inicializar React (React 18+)
// BrowserRouter proporciona el contexto necesario para que React Router funcione (navegación basada en URL)
// Importamos el proveedor de contexto de favoritos para poder usar `useFavorites` en toda la app
// Importamos el componente raíz de nuestra app
// Importamos Bootstrap para los estilos y funcionalidades (botones, dropdowns, etc.)
// Estilos personalizados de tu proyecto

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { FavoritesProvider} from  "./context/FavoritesProvider.jsx";
import { App } from "./App.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "./App.css"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <FavoritesProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </FavoritesProvider>
    </StrictMode>,
);

/* Si uso useNavigate o useLocation en el FavoritesProvider, entonces el BrowserRouter deberia ir por encima envolviendo al FavoritesProvider. */