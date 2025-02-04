import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  //Local State Variable - Super Powerfull variable
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log(searchText);
  console.log('body render');

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9414991&lng=77.62358259999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

    const json = await data.json()
    console.log(json)
    //Optional Chaining
    setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  //Conditional Rendering
  // if (restaurantList.length === 0) {
  //   return <Shimmer />
  // }


  return restaurantList.length === 0 ? <Shimmer /> : (
    <div className='body'>
      <div className='filter'>
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
          <button onClick={() => {
            // Filter the restaurant cards and update the UI
            // Search Text

            console.log(searchText)

            const searchFilterData = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredList(searchFilterData)

          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => {
         const filterList = restaurantList.filter((res) => (res.info.avgRating > 4.5));
         setFilteredList(filterList)
        }}>Top Rated Restaurants</button>
      </div>
      <div className='res-container'>
        {
          filteredList.map((restaurant, index) => (<RestaurantCard key={index} resData={restaurant} />))
        }

      </div>
    </div>
  )
}

export default Body;