import React from "react";
import { ListCategories } from "./ListCategories";
import { useData } from "../hooks/useData";

export function SideBar({ onClick, onClose }) {

  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const { data } = useData(url)


  return (

    <aside className=" absolute md:static h-screen">

      <div className="h-screen absolute opacity-80 md:static md:opacity-100 flex flex-col items-center bg-orange-400 p-6 pt-2">
        <button onClick={onClose} className="flex justify-end w-full text-4xl pb-2 md:hidden">
          &times;
        </button>
        <input className="rounded-xl text-center md:mt-10" type="text" placeholder="Search categories" />
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