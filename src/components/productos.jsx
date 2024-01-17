import React from 'react'

const Productos = ({ image, description, price }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={image} alt="Card" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{description}</div>
        <p className="text-gray-700 text-base">{price}</p>
      </div>
    </div>
  )
}

export default Productos