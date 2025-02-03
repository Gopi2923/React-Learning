import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {

    const { resData = {}} = props;
  
    const {
      cloudinaryImageId= "",
      name = "",
      cuisines = [],
      avgRating = 0,
      costForTwo = "",
      deliveryTime = 0,
    } = resData?.info || resData?.info?.sla || {};
  
    return (
      <div className='res-card' style={{backgroundColor: "#f0f0f0"}}>
        <div>
          <img className='res-logo' alt='res-logo' src= {CDN_URL + cloudinaryImageId }/>
        </div>
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} Minutes</h4>
      </div>
    )
  }

  export default RestaurantCard