import { useEffect, useState } from "react";

const ResaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9414991&lng=77.62358259999999&restaurantId=229&catalog_qa=undefined&submitAction=ENTER');
        const json = await data.json();

        console.log(json);
        // setResInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info)
        setResInfo(json.data);
    }

    const {name, cusines} = resInfo?.cards[0]?.card?.card?.text;

    return (
        <div className="menu"> \
            <h1> {name} </h1>
            <h2>Menu</h2>
        </div>
    )
}

export default ResaurantMenu;