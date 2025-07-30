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