import React from 'react'
import Item from './Item'
import Articulos from './Articulos'


const ItemListContainer = () => {

    const shopAlert = () => {
        swal({
            title: "Lo sentimos :(",
            text: "Pero todavía no tenemos artículos disponibles. Vuelve más tarde",
            icon: "warning",
            button: "Aceptar",
            timer: "2000"
        })
    }  


  return (
    <>  
        <div className='flex justify-center text-center mb-20 font-inter text-2xl'>
            <h1>¡Gracias por visitar devShop!</h1>
            <h2>Somos la tienda #1 en productos para desarrolladores </h2>
            
            <button onClick={()=>shopAlert()}> 
                <span className='text-white font-bold m-4 underline'>
                <ion-icon name="bag-handle"></ion-icon>
                 Empezar a comprar
                </span>
            </button>
        </div>
        
        <div className='text-center relative top-40'>
            <Articulos />
        </div>

        <div className='flex justify-around text-center '>
            <Item /> 
            <Item /> 
            <Item /> 
            <Item /> 
        </div> 
        
        
    </>
  )
}

export default ItemListContainer