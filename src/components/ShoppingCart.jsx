import React from 'react'
import swal from 'sweetalert'

const ShoppingCart = () => {

    const cartAlert = () => {
        swal({
            title: "¡Ups!",
            text: "Algo no ha salido bien... Intenta más tarde",
            icon: "warning",
            button: "Aceptar",
            timer: "2000"
        })
    }

    return (
        
            <button onClick={()=>cartAlert()}> 
                <span className='text-white font-bold m-4' >
                <ion-icon name="cart">
                    
                </ion-icon>
                2
                </span>
            </button>
         
  )
}

export default ShoppingCart