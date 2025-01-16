import React from 'react'

export function ListCategories({ category, onClick }) {

    const { idCategory, strCategory, strCategoryThumb } = category

    return (
        <>
            <li 
                className='grid grid-cols-2 gap-4 my-2 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-md space-x-10'
                onClick={() => onClick(strCategory)}     
            >
                <span className="font-thin">{strCategory}</span>
                <img src={strCategoryThumb} alt="postre"
                    className="w-14 " />
            </li>
        </>
    )
}

