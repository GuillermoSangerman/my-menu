import React, {useEffect, useState} from "react";
import { CardsItem } from "./CardsItem";
import { useData } from "../hooks/useData";
export function Cards({ category}) {

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    const {data} = useData(url)
    
  return (
    <>
    
      {data?.meals &&
      data?.meals.map(categoryItem =>
        
        <li className=" m-0 ">
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
