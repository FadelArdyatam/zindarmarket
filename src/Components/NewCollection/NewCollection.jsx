import React from 'react'
import './NewCollection.css'
import data_product from '../Assets/new_collections';
import Item from '../item/item';

const NewCollection = () => {
  return (
    <div className='new-collection'>
      <h1>New Collection</h1>
      <hr/>
      <div className='new-collection-item'>
        {data_product.map((item, i) => (
          <Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price}
          />
        ))}
      </div>  
    </div>
  )
}

export default NewCollection