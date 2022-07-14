import React from 'react'

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
        <div className='shadow-md w-full h-screen flex justify-center items-center font-bold font-roboto text-black relative top-20 text-xl'>
            <h1>¡Gracias por visitar devShop!</h1>
            <h2>Somos la tienda #1 en productos para desarrolladores </h2>
            
            <button onClick={()=>shopAlert()}> 
                <span className='text-white font-bold m-4 underline'>
                <ion-icon name="bag-handle"></ion-icon>
                 Empezar a comprar
                </span>
            </button>

        </div>
        
    </>
  )
}

export default ItemListContainer