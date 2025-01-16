import React from 'react'

export function CardsItem({ categoryItem }) {

    const { strMeal, strMealThumb, idMeal } = categoryItem

    return (

        <>
            <span className=" border border-indigo-600 rounded-lg">

                <img src={strMealThumb} alt={strMeal} />

                <h2 className="card-header text-center">{strMeal}</h2>

            </span>
        </>

    )
}
