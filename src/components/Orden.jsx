import Image from "next/image"
import axios from "axios"
import { toast } from 'react-toastify'
import { formatearDinero } from "@/helpers"

const Orden = ({orden}) => {

    const {id, nombre, total, pedido} = orden
    
    const completarOrden = async () => {
        try {
            await axios.post(`/api/ordenes/${id}`)
            toast.success('Orden Lista')
        } catch (error) {
            console.log(error)
            toast.error('¡Vaya!, algo salió mal')
        }
    }

  return (
    <div className="border p-10 space-y-5">
        <h3 className="text-2xl font-black">Orden: {id}</h3>
        <p className="text-lg my-10 font-bold">Cliente: {nombre}</p>
    
        <div>

            {pedido.map(platillo => (
                <div 
                    key={platillo.id}
                    className="py-3 flex items-center border-b last-of-type:border-0"
                >
                    <div className="w-28">
                        <Image src={`/assets/img/${platillo.imagen}.jpg`} width={250} height={200} alt={`${platillo.nombre}`} className="rounded shadow-xl"/>
                    </div>

                    <div className="p-5 space-y-2">
                        <h4 className="text-xl font-bold text-amber-500">
                            {platillo.nombre}
                        </h4>
                        <p className="text-lg font-bold">Cantidad: {platillo.cantidad}</p>
                    </div>                    

                </div>
            ))}

        </div>

        <div className="md:flex md:items-center md:justify-between my-10">
                <p className="md:px-3 sm:text-xl mt-5 font-black lg:text-4xl text-amber-600">
                    Total a Pagar: {formatearDinero(total)}
                </p> 
                <button 
                    className="md:mt-0 md:text-sm py-3 px-10 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md text-xl font-bold uppercase hover:shadow-md transition-[background-color] transition-duration:2000"
                    onClick={completarOrden}
                >
                    Completar Orden
                </button>
        </div>
    
    </div>
  )
}

export default Orden
