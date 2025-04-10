import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />

    const {name, cuisines, costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(categories)



    return (
        <div className="max-w-3xl mx-auto p-6">
            {/* Restaurant Header */}
            <div className="mb-8 border-b pb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
                <p className="text-gray-600 text-sm">
                    {cuisines.join(", ")} - {costForTwoMessage}
                </p>
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-semibold text-gray-700">{avgRating}</span>
                    <span className="text-yellow-400">★</span>
                </div>
            </div>

            {/* Menu Items */}
            {/* <div className="menu">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Menu</h2>
                <ul className="space-y-4">
                    {itemCards.map((item) => (
                        <li 
                            key={item.card.info.id}
                            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <span className="text-gray-700 font-medium">
                                {item.card.info.name}
                            </span>
                            <span className="text-gray-600 font-semibold">
                                ₹{item.card.info.price/100}
                            </span>
                        </li>
                    ))}
                </ul>
            </div> */}

            {/* Menu Categories */}
            {categories.map((category) => (<RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}/>))}
        </div>
    );
};

export default RestaurantMenu;