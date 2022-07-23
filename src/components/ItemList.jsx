import React from 'react'
import Item from './Item'

const ItemList = ({listaProductos}) => {
  return (
    <div className='flex justify-around text-center'>
        {listaProductos.map((producto)=> <Item key={producto.id} producto={producto}/>)}
    </div>
  )
}

export default ItemList