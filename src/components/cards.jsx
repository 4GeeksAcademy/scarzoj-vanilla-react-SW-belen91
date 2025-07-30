
import { useFavorites } from "../context/FavoritesProvider";
import { useNavigate } from "react-router-dom";

export const StarWarsCard = ({ name, image, onClick, id, type }) => {

    const { toggleFavorite, isFavorite } = useFavorites();

    const navigate = useNavigate();

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
                    <h5 className="card-title">{name}</h5>
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