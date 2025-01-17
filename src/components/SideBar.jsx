import React, { useEffect, useState } from "react";
import { ListCategories } from "./ListCategories";
import { useData } from "../hooks/useData";

export function SideBar({ onClick }) {

  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const { data } = useData(url)


  return (

    <aside className="w-64 h-screen">

      <div className="h-screen flex flex-col items-center bg-orange-400 p-6 pt-16 ">
        <input className="rounded-xl text-center" type="text" placeholder="Search categories" />
        <ul className="space-2 pt-5 ">
          {data.categories &&
            data?.categories.map(category =>
              <ListCategories
                category={category}
                key={category.idCategory}
                onClick={onClick}
              />
            )
          }
        </ul>
      </div>
    </aside>
  )
}