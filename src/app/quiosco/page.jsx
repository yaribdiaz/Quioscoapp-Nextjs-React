'use client'
import Producto from "@/components/Producto";
import { useQuiosco } from "@/context/QuioscoProvider"


export default function Quiosco() {

  const { categoriaActual} = useQuiosco()

  return (
    <>
      <div>        
          <h1 className="text-4xl font-black bold">{categoriaActual?.nombre}</h1>
          <p className="text-2xl my-10">
            Elige y personaliza tu pedido a continuación
          </p>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4">
              {categoriaActual?.productos?.map(producto => (
                  <Producto key={producto.id} producto={producto}/>
                ))}
          </div>
      </div>            
    </>
    

  )
}

