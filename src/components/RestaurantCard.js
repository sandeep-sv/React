import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props)=>{
  const {resData}=props;
  return (
    <div className="res-card">
      <div className="res-img-container">
         <img  src={CDN_URL+resData.info.cloudinaryImageId} />
      </div>
      
      <h3>{resData.info.name}</h3>
      <h3>{resData.info.avgRating} Stars</h3>
      <h4>{resData.info.cuisines.join(', ')}</h4>


    </div>
  );
};

export default RestaurantCard;