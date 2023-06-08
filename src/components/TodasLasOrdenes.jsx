import { formatearDinero, formatearFecha } from "@/helpers"
import Image from "next/image"

const TodasLasOrdenes = ({orden}) => {

    const {id, nombre, fecha, total, pedido} = orden

  return (
    <>
    <div className="mb-3 md:border-2 xl:border-4 border-black h-auto rounded-md p-3">
            <div className="flex justify-around py-2 border-2 border-gray-500 mb-2">
                <p className='font-bold'>FECHA: <span className="uppercase">{formatearFecha(parseInt(fecha))}</span></p>
                <p className='font-bold'>ID: <span>{id}</span></p>
            </div>

            <div className='flex '>
                <div className='pr-2 md:w-2/5  xl:w-2/5 flex flex-col justify-around border-r-2 border-gray-400 '>
                    <p className='font-bold xl:text-2xl md:text-md'>Nombre: <span className="font-bold xl:text-2xl md:text-md block text-gray-500">{nombre}</span></p>
                    <p className='font-bold xl:text-2xl md:text-md'>Total: <span className="text-amber-500 block">{formatearDinero(total)}</span></p>
                </div>

                <div className='md:4/5 xl:w-3/5  ml-2'>
                    {pedido?.map(platillo => (

                        <div className="flex py-2 border-b-2 last-of-type:border-none" key={platillo.id}>
                            
                            <Image src={`/assets/img/${platillo.imagen}.jpg`} width={80} height={50} alt={platillo.nombre} className="rounded"/>
                            <div className="flex-row ml-2 ">
                            <p className="font-bold border-b mb-2 uppercase">{platillo.nombre}</p>
                            <p className="font-bold">Precio: <span className="text-gray-600">{formatearDinero(platillo.precio)}</span></p>
                            <p className="font-bold">Cantidad: {platillo.cantidad}</p>
                            <p className="font-bold">Subtotal: <span className="text-amber-500">{formatearDinero(platillo.precio * platillo.cantidad)}</span></p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
    </div>
    </>
  )
}

export default TodasLasOrdenes
