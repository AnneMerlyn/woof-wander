import DogCard from "./DogCard";
import { fetchDogs } from "../utils/network";
import { useEffect, useState } from "react";

const DogExplorer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getDogs = async () => {
            const dogs = await fetchDogs();
            if (dogs) setData(dogs);
        };

        getDogs();
    }, []);

    return (
        <>
            {/* <h1>Dog Explorer Page</h1> */}
            <div className="gap-2 grid grid-cols-1 md:grid-cols-3">
                {data.length > 0 ? (
                    data.map((item) => <DogCard key={item.id} item={item} />)
                ) : (
                    <p>Loading dogs...</p>
                )}
            </div>
        </>
    );
};

export default DogExplorer;
