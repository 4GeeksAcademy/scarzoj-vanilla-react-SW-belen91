import { useEffect, useState } from "react";

// - useEffect: para ejecutar código cuando el componente se monta (o cuando cambian ciertas dependencias)
// - useState: para guardar y actualizar el estado local (en este caso, la lista de personajes)

import { getAllPeople, getPersonImage } from "../api/starWarsApi";
import { StarWarsCard } from "./StarWarsCard";
import { useNavigate } from "react-router-dom";


export const CharacterList = () => {

    // Estado para guardar los personajes que se reciben de la API

    const [people, setPeople] = useState([]);
    const navigate = useNavigate();

    // Este efecto se ejecuta **solo una vez** cuando el componente se monta (porque el array de dependencias está vacío [])
        // Llama a la función que obtiene los personajes de la API.
        // Cuando llegan, se guardan en el estado usando setPeople.

    useEffect(() => {
        getAllPeople()
            .then((data) => setPeople(data.results))
            .catch((err) => console.error(err));
    }, []);

    return (
        <section className="mb-5">
            <h2 className="text-warning ms-3">🧑‍🚀 Personajes</h2>

            {/* Contenedor horizontal que permite hacer scroll con las tarjetas alineadas en fila */}

            <div className=" card-fixed d-flex overflow-auto px-3">
                {people.map((person) => (
                    <StarWarsCard
                        key={person.uid} // clave única para ayudar a React a identificar elementos
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