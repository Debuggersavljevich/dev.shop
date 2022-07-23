import React from 'react'
import {useState, useEffect} from 'react'
import Item from './Item'
import Articulos from './Articulos' 
import ItemList from './ItemList'


const ItemListContainer = () => {

    const [listaProductos, setListaProductos] = useState([])
    const shopAlert = () => {
        swal({
            title: "Lo sentimos :(",
            text: "Pero todavía no tenemos artículos disponibles. Vuelve más tarde",
            icon: "warning",
            button: "Aceptar",
            timer: "2000"
        })
    }  

    function generateID() {
        const generarID = () => {
          const num = Math.random().toString(36).substring(2)
          const date = Date.now().toString(36)
          return num + date
        }}
       
       let products = [{
        name: 'Mouse Vertical',
        brand: 'Logitech',
        info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum fermentum tortor...',
        price: 120.00,
        id: generateID()},
        {
            name: 'Mouse Vertical',
            brand: 'Logitech',
            info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum fermentum tortor...',
            price: 120.00,
            id: generateID()
          
          },
          {
            name: 'Mouse Vertical',
            brand: 'Logitech',
            info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum fermentum tortor...',
            price: 120.00,
            id: generateID()
          
          },
          {
            name: 'Mouse Vertical',
            brand: 'Logitech',
            info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum fermentum tortor...',
            price: 120.00,
            id: generateID()
          
          }]
       
    
      const data = new Promise ((resolve, reject) => {
        let condition = true
        setTimeout(() => {
          if(condition){
            resolve(products)
          } else(
            reject('No se ha podido')
          )
        }
    
        )
      }, 3000)
       
      
      useEffect(() => {
        data
        .then((res) => setListaProductos(res))
        .catch((error) => console.log(error))
      }, []);
       

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

        <div className='flex justify-around text-center'>
            <ItemList listaProductos = {listaProductos}/>
        </div> 
        
        
    </>
  )
}

export default ItemListContainer