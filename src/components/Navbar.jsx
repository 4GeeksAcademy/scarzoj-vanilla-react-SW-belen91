import { useFavorites } from "../context/FavoritesProvider";
import logo from "../assets/star_wars_final_fd43ce2fc611-mobile.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  
  const { toggleFavorite, favorites } = useFavorites();
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-black px-4">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-warning fw-bold d-flex align-items-center">
          <img src={logo} alt="Star Wars Logo" height="50" className="me-2" />
          Star Wars Wiki
        </Link>

        <div className="dropdown ms-auto">
          <button
            className="btn btn-warning dropdown-toggle"
            type="button"
            id="favoritesDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            ❤️ Favoritos ({favorites.length})
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">
            {favorites.length === 0 ? (
              <li className="dropdown-item text-muted">No hay favoritos aún</li>
            ) : (
              favorites.map((fav) => (
                <li
                  key={`${fav.type}-${fav.id}`}
                  className="dropdown-item d-flex justify-content-between align-items-center"
                >
                  <span
                    role="button"
                    className="text-primary me-2"
                    onClick={() => navigate(`/details/${fav.type}/${fav.id}`)}
                  >
                    {fav.name}
                  </span>
                  <button
                    className="btn btn-sm btn-outline-danger py-0 px-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(fav)}}
                  >
                    💥
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
