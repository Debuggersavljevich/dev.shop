import React from 'react'
import swal from 'sweetalert'

const Articulos = () => {
  
    const articleAlert = () => {
        swal({
            title: "¡Ups!",
            text: "Ésta categoría todavía no existe :(",
            icon: "info",
            button: "Aceptar",
            timer: "4000"
        })
    }

  return (
         <div className='text-center bg-teal-600 m-10 rounded-full border-4 shadow-xl border-teal-900 p-1 relative bottom-52 font-inter font-bold'>
           
                <h2>Nuestros productos más destacados</h2>
                    <button onClick={()=>articleAlert()} className='ml-5 w-12 h-12 mt-5 mb-3 hover:h-16 hover:w-16 transition-all bg-indigo-200 rounded-xl'><ion-icon size="large" name="headset"></ion-icon></button>
                    <button onClick={()=>articleAlert()} className='ml-5 w-12 h-12 mt-5 mb-3 hover:h-16 hover:w-16 transition-all bg-indigo-200 rounded-xl'><ion-icon size="large" name="camera"></ion-icon></button>
                    <button onClick={()=>articleAlert()} className='ml-5 w-12 h-12 mt-5 mb-3 hover:h-16 hover:w-16 transition-all bg-indigo-200 rounded-xl'><ion-icon size="large" name="game-controller"></ion-icon></button>
                    <button onClick={()=>articleAlert()} className='ml-5 w-12 h-12 mt-5 mb-3 hover:h-16 hover:w-16 transition-all bg-indigo-200 rounded-xl'><ion-icon size="large" name="laptop"></ion-icon></button>
            
        </div>
  )
}

export default Articulos