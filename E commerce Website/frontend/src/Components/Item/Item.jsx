import React from 'react'
import './Item.css'
const item = () => {
  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices"></div>
    </div>
  )
}

export default item
