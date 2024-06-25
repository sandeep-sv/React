import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = ()=>{

  const[restList,setRestList] = useState(resList);

  return(
    <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
            const filteredList = resList.filter((res)=>
              res.info.avgRating>4.4
            )

            setRestList(filteredList);

            
          }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {
            restList.map((rest)=>{
              return <RestaurantCard key={rest.info.id} resData = {rest}/>
            }) 
          }
           
        </div>

    </div>

  )
}

export default Body;