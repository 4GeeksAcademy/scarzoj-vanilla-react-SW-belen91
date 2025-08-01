
import { useFavorites } from "../context/FavoritesProvider";
import { useNavigate } from "react-router-dom"; 

// Importamos el hook `useNavigate` que nos permite cambiar la URL del navegador (navegación programática).
// Importamos el hook `useFavorites` que nos permite acceder y modificar la lista de favoritos, viene del contexto que nosotros mismos creamos para compartir estado entre componentes.


// Definimos el componente `StarWarsCard`, que recibe los siguientes props: name, image, onClick, id, type. 

export const StarWarsCard = ({ name, image, onClick, id, type }) => {

    //Obtenemos las funciones del contexto: toggleFavorite (añadir o quitar de favoritos) y isFavorite (comprueba si está en favoritos o no)

    const { toggleFavorite, isFavorite } = useFavorites(); 
    
    const navigate = useNavigate();

    // HandleClick redirige al usuario a la página de detalles del elemento (por ejemplo: /details/people/1)

    const handleClick = () => {
        navigate(`/details/${type}/${id}`);
    };

    return (
        <div className="star-card-wrapper" >
            <div className="card star-card h-100 shadow border-warning bg-warning text-white position-relative">
                <button
                    className="btn btn-sm position-absolute bottom-0 end-0 m-2"
                    onClick={() => toggleFavorite({ id, type, name })}>
                    {isFavorite({ id, type }) ? "❤️" : "🤍"}
                </button>

                <img
                    src={image}
                    className="card-img-top"
                    onClick={handleClick} 
                    style={{ cursor: "pointer" }}
                    alt={name}
                />
                <div className="card-body text-center">
                    <h5 className="card-title m-1">{name}</h5>

                    {/* Si la prop onClick está definida, mostramos un botón "Más info".
                        Este botón también redirige a la página de detalles.
                    */}
                    
                    {onClick && (
                        <button className="btn btn-outline-warning mt-2" onClick={handleClick}>
                            Más info
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};