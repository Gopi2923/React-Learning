import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const { resData = {}} = props;
  
    const {
      cloudinaryImageId= "",
      name = "",
      cuisines = [],
      avgRating = 0,
      costForTwo = "",
    } = resData?.info || {};
  
    return (
      <div className='m-4 p-4 w-[250px] rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-200'>
        <div className="mb-3">
          <img className='w-full h-48 onject-cover rounded-2xl' alt='res-logo' src= {CDN_URL + cloudinaryImageId }/>
        </div>
        <h3 className="font-bold text-2xl py-1 text-gray-800">{name}</h3>
        <h4 className="text-sm text-gray-600 line-clamp-2">{cuisines.join(', ')}</h4>
        <div className="flex items-center gap-2 mt-2">
        <span  className="text-sm font-medium text-gray-500"><h4>{avgRating}</h4></span>
        <span className="text-xs text-gray-500">★</span>
        </div>
        <h4 className="text-sm text-gray-700 mt-1">{costForTwo}</h4>
        <h4 className="text-sm text-gray-600 mt-1">{resData?.info?.sla?.deliveryTime} Minutes</h4>
      </div>
    )
  }

  // Higher order component to add promotion label

  export const isPromoted = (RestaurantCard) => {
    return (props) => {
      return (
        <div>
          <label>Promoted</label>
          <RestaurantCard {...props} />
        </div>
      )
    }
  }
  export default RestaurantCard