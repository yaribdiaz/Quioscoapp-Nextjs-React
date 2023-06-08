'use client'
import { useEffect, useCallback } from "react"
import { useQuiosco } from "@/context/QuioscoProvider"
import { formatearDinero } from "@/helpers"

export default function Total(){

    const {pedido, nombre, setNombre, colocarOrden, total} = useQuiosco()

    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre.length < 3
    },[pedido,nombre])

    useEffect( () => {
        comprobarPedido()
    }, [pedido, comprobarPedido])



    return(
        <div>
            <h1 className='text-4xl font-black bold'>Total</h1>
            <p className='text-2xl my-10'>Confirma tu Pedido</p>
      
            <form onSubmit={colocarOrden}>
                <div>
                    <label htmlFor="nombre"  className="block uppercase text-slate-800 bold text-xl">
                        Nombre
                    </label>

                    <input 
                        id="nombre"
                        type="text"
                        className="bg-gray-200 w-full lg:w-1/3 mt-3 py-2 rounded-md text-center"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                     />

                    <div className="mt-10 text-2xl">
                        <p className="uppercase">Total a Pagar {' '} <span className="bold">{formatearDinero(total)}</span></p>
                    </div>
                    <div className="mt-5">
                        <input  
                            type="submit"
                            value="Confirmar Pedido" 
                            className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800 hover:cursor-pointer'} w-full lg:w-auto px-5 py-2 rounded uppercase text-white bold text-center`}
                            disabled={comprobarPedido()}
                        />
                    </div>
                    
                </div>
                
            </form>
      
        </div>
    )
}