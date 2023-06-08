'use client'
import TodasLasOrdenes from "@/components/TodasLasOrdenes"
import axios from "axios"
import useSWR from 'swr'
const Ordenes = () => {

  const fetcher = () =>  axios('/api/ordenesTodas').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api', fetcher, {refreshInterval: 100})

  return (
    <div>
        <h1 className="text-4xl font-black bold">Todas las Ordenes</h1>
        <p className="text-2xl mt-2 mb-4">Visualiza tus últimas ordenes</p>

        <div >
            {data?.slice(0).reverse().map(orden => (
              
                <TodasLasOrdenes
                  key={orden.id}
                  orden={orden}
                />
              
            ))}
        </div>

    </div>
  )
}

export default Ordenes
