import { createContext, useContext, useState } from "react";

// createContext: para crear un nuevo contexto (espacio compartido de estado)

// Creamos el contexto. Este objeto servirá para compartir datos entre componentes, sin tener que pasar props manualmente por cada nivel.

const FavoritesContext = createContext();


// Este componente (FavoritesProvider) envolverá a toda la aplicación (o a partes de ella) y proporcionará acceso al contexto de favoritos.

export const FavoritesProvider = ({ children }) => {
    
    // Estado local que guarda la lista actual de elementos marcados como favoritos
    
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (item) => {
        setFavorites((prev) => {
            
            // Comprobamos si el elemento ya está en favoritos (por id y tipo)

            const exists = prev.some((fav) => fav.id === item.id && fav.type === item.type);
            
            // Si ya está, lo eliminamos de la lista.
            if (exists) {
                return prev.filter((fav) => !(fav.id === item.id && fav.type === item.type));
            } else {
            // Si no está, lo añadimos al final.
                return [...prev, item];
            }
        });
    };

    // Esta función comprueba si un elemento está marcado como favorito. Devuelve true o false según exista en el array.
    
    const isFavorite = (item) => {
        return favorites.some((fav) => fav.id === item.id && fav.type === item.type);
    };

// Envolvemos a los hijos del componente con el provider y les damos acceso a la lista de favoritos, la función para alternar (añadir/quitar) y la función para comprobar si algo es favorito
    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

//Exportamos un hook que cualquier componente puede usar para acceder directamente al contexto de favoritos.

export const useFavorites = () => useContext(FavoritesContext);