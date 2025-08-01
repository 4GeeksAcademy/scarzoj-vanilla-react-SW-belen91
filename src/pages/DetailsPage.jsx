
// Importamos el hook useParams de React Router, que nos da acceso a los parámetros de la URL. Por ejemplo, en /details/people/1 → type = "people", id = "1"
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { getPersonInfo, getPlanetInfo } from "../services.api/GetInfo";

export const DetailPage = () => {

    // Extraemos los parámetros `type` e `id` de la URL. Estos valores los usa el componente para saber qué datos tiene que cargar
    const { type, id } = useParams();

    // Estado para guardar los datos de la entidad (persona o planeta)

    const [data, setData] = useState(null);

    // Función asíncrona para cargar los datos desde la API

    useEffect(() => {
        const fetchDetails = async () => {
            let res;

        // Según el tipo, llamamos a una función u otra

            if (type === "people") {
                res = await getPersonInfo(id);
            } else if (type === "planets") {
                res = await getPlanetInfo(id);
            } else {
        
        // Si el tipo no es reconocido, mostramos un error y no seguimos

                console.error("Tipo no válido:", type);
                return;
            }

        // Extraemos las propiedades del objeto y las guardamos en el estado

            setData(res.result.properties);
        };

    // Ejecutamos la función

        fetchDetails();

    // Se vuelve a ejecutar si cambia el tipo o el id
    
    }, [type, id]);


// Si aún no tenemos los datos, mostramos un mensaje

    if (!data) return <p className="text-light">Cargando datos de la galaxia...</p>;

    return (
        <div className="container mt-5 text-light">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/${type}/${id}.jpg`}
                        className="img-fluid rounded shadow"
                        alt={data.name}
                    />
                </div>
                <div className="col-md-8">
                    <h2>{data.name}</h2>

    {/* Mostramos todas las propiedades de forma automática */}

                    <ul className="list-group list-group-flush">
                        {Object.entries(data).map(([key, value]) => (
                            <li className="list-group-item bg-dark text-light" key={key}>
                                <strong>{key.replace(/_/g, " ")}:</strong> {value}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};