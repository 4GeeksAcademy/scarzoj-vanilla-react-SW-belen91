import { useEffect, useState } from "react";
import { getAllPeople, getAllPlanets, getPersonImage, getPlanetImage } from "../services.api/GetInfo";
import { StarWarsCard } from "../components/cards";


export const HomePage = () => {
    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const person = await getAllPeople();
            const planets = await getAllPlanets();
            setPeople(person.results);
            setPlanets(planets.results);
        };
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