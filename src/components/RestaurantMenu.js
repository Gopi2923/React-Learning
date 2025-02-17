import { useEffect, useState } from "react";

const ResaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    })

    const fetchData = async () => {
        const data = await fetch('');
        const json = await data.json();

        console.log(json);
        setResInfo(json.data);
    }
    return (
        <div className="menu">
            <h1>Name of Restaurant</h1>
            <h2>Menu</h2>
        </div>
    )
}

export default ResaurantMenu;