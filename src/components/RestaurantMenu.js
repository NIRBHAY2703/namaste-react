import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {id}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.areaName}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating} stars</h3>
        <h3>{restaurant.costForTwoMessage}</h3>
      </div>

      <div>
        <h1>Menu</h1>
        <ul>
          {" "}
          {restaurant.cuisines.map((cuisines) => {
            if (cuisines === 0) {
              return <li key={cuisines.toString()}>{cuisines}</li>;
            }
            return <li key={cuisines.toString()}> {cuisines}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
