'use client'
import ResumenProducto from "@/components/ResumenProducto"
import { useQuiosco } from "@/context/QuioscoProvider"


function resumen() {

  const {pedido} = useQuiosco()
  return (
    <div >  
      <h1 className='text-4xl font-black bold'>Resumen</h1>
      <p className='text-2xl my-10'>Revisa tu Pedido</p>

      {pedido.length === 0 ? (
        <p className="text-center text-2xl">No hay elementos en tu pedido</p>
      ) :
        pedido.map(producto  => (
          <ResumenProducto
            key={producto.id}
            producto={producto}
          />
        ))
      }

    </div>
  )
}

export default resumen
