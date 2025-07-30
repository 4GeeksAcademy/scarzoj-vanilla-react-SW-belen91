import { useEffect, useState } from "react";
import { getAllPeople, getPersonImage } from "../api/starWarsApi";
import { StarWarsCard } from "./StarWarsCard";
import { useNavigate } from "react-router-dom";


export const CharacterList = () => {
    const [people, setPeople] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        getAllPeople()
            .then((data) => setPeople(data.results))
            .catch((err) => console.error(err));
    }, []);

    return (
        <section className="mb-5">
            <h2 className="text-warning ms-3">🧑‍🚀 Personajes</h2>
            <div className=" card-fixed d-flex overflow-auto px-3">
                {people.map((person) => (
                    <StarWarsCard
                        key={person.uid}
                        id= {person.uid}
                        name={person.name}
                        type= "people"
                        image={getPersonImage(person.uid)}
                        onClick={() => navigate(`/details/people/${person.uid}`)}
                    />
                ))}
            </div>
        </section>
    );
};