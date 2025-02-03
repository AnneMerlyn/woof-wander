import { fetchDogs, fetchDogStatus } from "../utils/network";

const DogStatus = () => {
    (async () => {
        try {
            const dogs = await fetchDogs();
            const status = await fetchDogStatus();

            if (!dogs || !status) {
                throw new Error("Something went wrong");
            }
            console.log(dogs);
            console.log(status);
        } catch (error) {
            console.error("Error fetching dogs:", error);
        }
    })();

    return (
        <>
            <h1>Dog Status Page</h1>
        </>
    );
};

export default DogStatus;
