import { Cards } from "./components/Cards";
import { ModalInstruccions } from "./components/ModalInstruccions";
import { Navegador } from "./components/Navegador";
import { SideBar } from "./components/SideBar"
import { Search } from "./components/Search";
import React, { useState } from "react";

export async function fetchData(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}


export default function App() {

  const [category, setCategory] = useState('Beef')

  return (

    <>
    <div className="flex">
    <SideBar 
      onClick={setCategory}
    />
      <div className="grid grid-cols-1">
        <Navegador />
        <Search/>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 p-36">
          <Cards 
            category={category}
          />
        </ul>
      </div>
    </div>

    </>

  )
}