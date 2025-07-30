import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPersonInfo, getPlanetInfo } from "../services.api/GetInfo";

export const DetailPage = () => {
  const { type, id } = useParams(); 
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      let res;
      if (type === "people") {
        res = await getPersonInfo(id);
      } else if (type === "planets") {
        res = await getPlanetInfo(id);
      } else {
        console.error("Tipo no válido:", type);
        return;
      }

      setData(res.result.properties);
    };

    fetchDetails();
  }, [type, id]);

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