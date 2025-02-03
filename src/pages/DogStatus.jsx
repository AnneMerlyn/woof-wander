import { useEffect, useState } from "react";
import { fetchDogStatus } from "../utils/network";
import DogStatusCard from "../components/DogStatusCard";

const DogStatus = () => {
    (async () => {
        try {
            const status = await fetchDogStatus();

            if (!status) {
                throw new Error("Something went wrong");
            }
            console.log(status);
        } catch (error) {
            console.error("Error fetching dogs:", error);
        }
    })();

    const [data, setData] = useState([]);

    useEffect(() => {
        const getDogs = async () => {
            const statuses = await fetchDogStatus();
            if (statuses) setData(statuses);
        };

        getDogs();
    }, []);

    return (
        <>
            {/* <h1>Dog Status Page</h1> */}
            <div className="gap-2 grid grid-cols-1 md:grid-cols-3">
                {data.length > 0 ? (
                    data.map((item) => (
                        <DogStatusCard key={item.id} item={item} />
                    ))
                ) : (
                    <p>Loading dog statuses...</p>
                )}
            </div>
        </>
    );
};

export default DogStatus;
