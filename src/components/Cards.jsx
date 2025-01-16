import React, {useEffect, useState} from "react";
import { fetchData } from "../App"
import { CardsItem } from "./CardsItem";
export function Cards({ category}) {

    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
    const [categoryFood, setCategoryFood] = useState([]);
    useEffect(() => {
      fetchData(url + category)
        .then(data => setCategoryFood(data.meals))
        .catch(error => console.error(error))
    }, [category])
    
  return (
    <>
    
      {categoryFood &&
      categoryFood.map(categoryItem =>
        
        <li className=" mt-20 ">
        <CardsItem
        key={categoryItem.strMeal}
        categoryItem={categoryItem}
        
        />
      </li>
      
      )
      
      }    
    </>
  )
}
