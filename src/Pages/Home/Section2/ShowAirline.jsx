import { useEffect } from "react";
import { useState } from "react";
import AirlineCard from "./AirlineCard";


const ShowAirline = () => {
    const [airlines, setAirlines] = useState([]);
    useEffect(() => {
        fetch('airline.json')
            .then(res => res.json())
            .then(data => setAirlines(data))
    }, [])
    return (
        <div className=" w-full mt-5 grid grid-cols-1 gap-5 ">
            {
                airlines.map(airline => <AirlineCard
                    key={airline.id}
                    airline={airline}
                >

                </AirlineCard>)
            }
        </div>
    );
};

export default ShowAirline;