import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

   // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State Variable - Super Powerful variable
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

    // * Whenever a state variable updates or changes, react triggers a reconciliation cycle(re-renders the component)
  console.log(searchText);
  console.log('body render');

  useEffect(() => {
    fetchData()
    fetchMoreData()
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9414991&lng=77.62358259999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

    const json = await data.json()
    console.log(json)
     // * optional chaining
    
    setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const fetchMoreData = async () => {
    try {
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const json = await data.json();
      console.log(json);
      setRestaurantList(json?.data?.cards[0]?.card?.gridElements?.infoWithStyle?.restaurants || []);
      setFilteredList(json?.data?.cards[0]?.card?.gridElements?.infoWithStyle?.restaurants || []);
    } catch (error) {
      console.error('Error fetching more data:', error);
    }
  };
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
          filteredList.map((restaurant) => ( <Link key={restaurant.info.id} to={'/restaurant/' + restaurant.info.id }> <RestaurantCard resData={restaurant} /> </Link> ))
        }

      </div>
    </div>
  )
}

export default Body;