import React from 'react';
import Item from './Item';

const ItemsList = ({ items, deleteItem }) => (
  <div>
    
    {
      items.map( item => <Item key={item.id} {...item} deleteItem = {deleteItem}/>)
    }
  </div>
)



export default ItemsList;