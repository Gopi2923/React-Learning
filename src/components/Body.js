import RestaurantCard, { isPromoted } from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {

  // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State Variable - Super Powerful variable
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardWithPromotion = isPromoted(RestaurantCard);

  // * Whenever a state variable updates or changes, react triggers a reconciliation cycle(re-renders the component)
  console.log(searchText);
  console.log('body render');

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9414991&lng=77.62358259999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

    const json = await data.json()
    console.log(json)
    // * optional chaining

    setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }


  //Conditional Rendering
  // if (restaurantList.length === 0) {
  //   return <Shimmer />
  // }

  const onlineStatus = useOnlineStatus()

  if (onlineStatus === false) {
    return <h1>Looks like you're offline, Please check your internet connection</h1>
  }


  return restaurantList.length === 0 ? <Shimmer /> : (
    <div className='body'>
      <div className='filter flex m-4 p-4'>
        <div className="">
          <input type="text" className="border border-solid border-black-500 rounded" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
          <button className="m-4 px-4 py-1 bg-amber-200 rounded" onClick={() => {
            // Filter the restaurant cards and update the UI
            // Search Text

            console.log(searchText)

            const searchFilterData = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredList(searchFilterData)

          }}>Search</button>
        </div>
        <button className="mx-8 px-5 py-0 h-10 mt-3 cursor-pointer bg-gray-200 rounded" onClick={() => {
          const filterList = restaurantList.filter((res) => (res.info.avgRating > 4.5));
          setFilteredList(filterList)
        }}>Top Rated Restaurants</button>
      </div>

      <div className='flex flex-wrap'>
        {
          filteredList.map((restaurant) => (<Link key={restaurant.info.id} to={'/restaurant/' + restaurant.info.id}> {restaurant.info.promoted ? (<RestaurantCardWithPromotion resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)} </Link>))
        }

      </div>
    </div>
  )
}

export default Body;