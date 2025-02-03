import { dogNames } from "../data/dogNames";
import { dogStatuses } from "../data/dogStatuses";

const API_KEY = import.meta.env.VITE_API_KEY;

console.log("API KEY:", API_KEY);

export const fetchDogs = async () => {
    try {
        const fetchPromises = dogNames.map(async (name) => {
            const apiUrl = `https://api.api-ninjas.com/v1/dogs?name=${encodeURIComponent(
                name
            )}`;

            const options = {
                headers: {
                    accept: "application/json",
                    "X-Api-Key": API_KEY,
                },
            };

            const response = await fetch(`${apiUrl}`, options);

            if (!response.ok) {
                throw new Error("Error in fetching movies!");
            }
            const data = await response.json();
            return data;
        });

        const allDogsData = await Promise.all(fetchPromises);

        return allDogsData.flat();
    } catch (e) {
        console.log(`${e} Error fetching Dog API`);
    }
};

export const fetchDogStatus = async () => {
    try {
        const fetchPromises = dogStatuses.map(async (code) => {
            const apiUrl = `/dog-api/${encodeURIComponent(code)}.json`;

            const response = await fetch(`${apiUrl}`);
            if (!response.ok) {
                throw new Error("Error in fetching movies!");
            }
            const data = await response.json();
            return data;
        });

        const allDogsData = await Promise.all(fetchPromises);

        return allDogsData.flat();
    } catch (e) {
        console.log(`${e} Error fetching Dog API`);
    }
};
