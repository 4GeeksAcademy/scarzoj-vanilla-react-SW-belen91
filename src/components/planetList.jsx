
import { useEffect, useState } from "react";
import { getAllPlanets,  getPlanetImage, } from "../api/starWarsApi";
import { StarWarsCard } from "./StarWarsCard";
import { useNavigate } from "react-router-dom";


export const PlanetList = () => {
    const [planets, setPlanets] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllPlanets()
            .then((data) => setPlanets(data.results))
            .catch((err) => console.error(err));
    }, []);

    return (
        <section className="mb-5">
            <h2 className="text-warning ms-3">🌍 Planetas</h2>
            <div className="d-flex overflow-auto px-3">
                {planets.map((planet) => (
                    <StarWarsCard
                        key={planet.uid}
                        id= {planet.uid}
                        name={planet.name}
                        type="planet"
                        image={getPlanetImage(planet.uid)}
                        onClick={() => navigate(`/details/planets/${planet.uid}`)}
                    />
                ))}
            </div>
        </section>
    );
};