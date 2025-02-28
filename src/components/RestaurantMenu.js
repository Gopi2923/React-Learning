import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ResaurantMenu = () => {

    // const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();
    
    // console.log(resId)
    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     const data = await fetch(Menu_API + resId + '&catalog_qa=undefined&submitAction=ENTER');
    //     const json = await data.json();

    //     console.log(json);
    //     // setResInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info)
    //     setResInfo(json.data);
    // }

    const resInfo = useRestaurantMenu(resId);

    console.log('resmenu')

    if (resInfo === null) return <Shimmer />

    const {name, cuisines, costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards)
    return (
        <div className="menu"> 
            <h1> {name} </h1>
           <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>{avgRating}</h2>

            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100}</li>
                ))}

            </ul>
        </div>
    )
}

export default ResaurantMenu;