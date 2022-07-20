import React, {useState, useEffect} from 'react'
import swal from 'sweetalert'



const Item = () => {



   
   
    
    
    
    const [count, setCount] = useState(3);
   
    
 
        
        if(count === 10 ){
            let stockAlert = () => {
                swal({
                    title: "¡Oye!",
                    text: "¡No hay más que agregar!",
                    icon: "warning",
                    button: "Aceptar",
                    timer: "4000"
                })
            }
        }
    


   
  return (

    

    <div className='m-10'>
        
        <div class="shadow-lg bg-white rounded-md overflow-hidden max-w-xs mx-auto">
    <img class="w-full h-52 p-5 rounded-sm object-cover" src="./src\images\mouse-vertical.png" alt="Hotel Room" />
    <div class="py-7 px-6">
    <div class="flex justify-between items-end">
      <span>Mouse Vertical <br /> Logitech</span>
      <button  class="text-blue-500 capitalize border border-gray-300 rounded-md py-1 px-3 hover:bg-indigo-200 transition-all" > <ion-icon name="cart"></ion-icon>{count}</button>
    </div>
      <h1 class="text-2xl font-bold text-gray-800">$120.00</h1>
      <hr class="mt-3 mb-5" /> 
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum fermentum tortor...</p>
      
      <span class="text-gray-400 text-sm mt-2.5 mb-6 block"><span></span></span>
      <div>
        <button onClick={() => setCount(count + 1)}  class="capitalize bg-blue-500 rounded-md pt-1 pb-1.5 px-3.5 text-white">Agregar</button>
        <button disabled={count <= 0} onClick={() => setCount(count - 1)}  className="capitalize bg-red-500 rounded-md pt-1 pb-1.5 px-3.5 m-2 text-white">Quitar</button>
        <p className='bg-indigo-300 rounded-xl p-2 '> Stock:</p>
      </div>
    </div>
  </div>
        </div>
    
  )
}

export default Item