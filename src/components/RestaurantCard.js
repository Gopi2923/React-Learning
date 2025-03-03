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
      <div className='m-4 p-4 w-[250] bg-gray-100 hover:bg-gray-300'>
        <div>
          <img className='w-[200] rounded-2xl' alt='res-logo' src= {CDN_URL + cloudinaryImageId }/>
        </div>
        <h3 className="font-bold text-2xl py-3">{name}</h3>
        <h4 className="">{cuisines.join(', ')}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData?.info?.sla?.deliveryTime} Minutes</h4>
      </div>
    )
  }

  export default RestaurantCard