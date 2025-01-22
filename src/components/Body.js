import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";

const Body = () => {
  return (
    <div className='body'>
      <div className='filter'>
        <button className="filter-btn" onClick={() => {console.log("btn clicked")}}>Top Rated Restaurants</button>
      </div>
      <div className='res-container'>
       {
        resList.map((restaturant) => (<RestaurantCard key={restaturant.card.card.info.id} resData={restaturant}/> ))
       }

      </div>
    </div>
  )
}

export default Body;