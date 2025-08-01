import { useEffect, useState } from "react";
import { getAllPeople, getAllPlanets, getPersonImage, getPlanetImage } from "../services.api/GetInfo";
import { StarWarsCard } from "../components/cards";


export const HomePage = () => {

    // Estado para guardar la lista de personajes

    const [people, setPeople] = useState([]);

    // Estado para guardar la lista de planetas

    const [planets, setPlanets] = useState([]);

    useEffect(() => {

    // Función asíncrona que obtiene los datos de personajes y planetas
        const fetchData = async () => {
            const person = await getAllPeople();
            const planets = await getAllPlanets();
                        
        // Guardamos los resultados en sus respectivos estados
            
            setPeople(person.results);
            setPlanets(planets.results);
        };

    // Llamamos a la función cuando el componente se monta

        fetchData();
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-light m-4">🧑‍🚀 Personajes</h2>
            <div className="d-flex overflow-auto gap-3 p-3">
                {people.map((person) => (
                    <div className="card-wrapper" key={person.uid}>
                        <StarWarsCard
                            id={person.uid}
                            name={person.name}
                            type="people"
                            image={getPersonImage(person.uid)}
                        />
                    </div>
                ))}
            </div>

            <h2 className="text-light m-4">🌍 Planetas</h2>
            <div className="d-flex overflow-auto gap-3 p-3">
                {planets.map((planet) => (
                    <div className="card-wrapper" key={planet.uid} >
                        <StarWarsCard
                            id={planet.uid}
                            name={planet.name}
                            type="planets"
                            image={getPlanetImage(planet.uid)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};