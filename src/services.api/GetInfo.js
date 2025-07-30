const INFO_URL = "https://www.swapi.tech/api/";
const IMAGE_URL = "https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/"

export async function getAllPeople() {
    const res = await fetch(`${INFO_URL}/people`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) throw new Error("GET failed");

    return res.json();
};

export async function getPersonInfo(id) {
    const res = await fetch(`${INFO_URL}/people/${id}/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) throw new Error("GET failed");
    return res.json();
};

export function getPersonImage(uid) {
    return `${IMAGE_URL}/people/${uid}.jpg`;
}

export async function getAllPlanets() {
    const res = await fetch(`${INFO_URL}/planets`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) throw new Error("GET failed");
    return res.json();
};

export async function getPlanetInfo(id) {
    const res = await fetch(`${INFO_URL}/planets/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) {
        const error = new Error("GET failed");
        error.status = res.status;
        throw error;
    }
    return res.json();

};

export function getPlanetImage(uid) {
    return `${IMAGE_URL}/planets/${uid}.jpg`;
}




