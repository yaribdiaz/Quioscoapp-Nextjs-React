'use client'
import useSWR from 'swr'
import axios from 'axios'
import Orden from '@/components/Orden'

const Admin = () => {

  //USEswr actualiza en tiempo real cuando hay un cambio
  const fetcher = () =>  axios('/api/ordenes').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, {refreshInterval: 100})

  return (
    <div>
          <h1 className="text-4xl font-black bold">Panel de Administración</h1>
          <p className="text-2xl my-10">Adminstra Ordenes</p>

          {
              data && data.length ? data.map( orden => (
                <Orden
                  key={orden.id}
                  orden={orden}
                />
              )) 
              
              :
              
              <p>No hay ordenes pendientes</p>
          }

    </div>
  )
}

export default Admin
