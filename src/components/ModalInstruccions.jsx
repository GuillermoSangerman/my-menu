import React from 'react'
import { ListSearch } from './ListSearch'

export function ModalInstruccions() {
  return (
    <>
      <div className='w-full bg-black h-96 text-center'>
        <span className='bg-gray-400 absolute top-8 md:inset-x-96  px-12 py-3 text-2xl'>ODEN</span>
        <img className='w-full h-96' src="https://gamebunker.com.br/wp-content/uploads/2021/04/kozuki-oden-one-piece-01-450x226.jpg" alt="imagen de comida" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 grid-rows-1 my-5">
        <span className='bg-red-600 w-full h-64 text-center pt-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300'>
          <h2>Instrucciones</h2>
          <ul className='text-start px-8'>
            <ListSearch/>
          </ul>
        </span>
        <span className='bg-red-600 w-full h-64 text-center pt-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300'>
          <h2>Medidas e ingredientes</h2>
          <ul className='text-start px-4'>
            <ListSearch/>
          </ul>
        </span>

      </div>
      <div className='w-full h-72'>
        <iframe className='w-full h-72 aspect-video ' src="https://youtu.be/FPiH3q4mDWc?si=x23s8MFPdNz9Sv0Z">Suuuuuuuuuuuuper Franky</iframe>
      </div>

    </>
  )
}

const Inst = [
  {
    name: "oden",
    ingredientes:{
      huevo:"huevo",
      agua:"Agua"
    }
  }
]

//https://gamebunker.com.br/wp-content/uploads/2021/04/kozuki-oden-one-piece-01-450x226.jpg
//https://youtu.be/FPiH3q4mDWc?si=x23s8MFPdNz9Sv0Z