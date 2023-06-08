'use client'
import { useEffect } from "react"
import axios from "axios"
import useSWR from 'swr'
import { toast } from 'react-toastify'
import { formatearFecha, fechaNumerica, formatearDinero } from "@/helpers"

const Corte= () => {

  const fetcher = () =>  axios('/api/ordenesTodas').then(datos => datos.data)
  const { data, error, isLoading } = useSWR(`/api/ordenesTodas`, fetcher, {refreshInterval: 100})

  const ordenHoy = data?.filter(orden=> fechaNumerica(Date.now()) === fechaNumerica(parseInt(orden.fecha)) )
  
  const ventas = ordenHoy?.map(orden => {
  const cliente = orden.pedido.reduce((total, platillo) => (platillo.precio * platillo.cantidad) + total, 0)
  const productos = orden.pedido.reduce((total, platillo) => (platillo.cantidad) + total, 0)
  return {cliente,productos}
  })

  const totalVendido = ventas?.reduce((total, venta) => venta.cliente + total, 0)
  const productosVendidos = ventas?.reduce((total, productos) => productos.productos + total, 0)


  return (
    <div>
        <h1 className="text-4xl font-black bold">Corte del Día</h1>
        <p className="text-2xl mt-2 mb-4">Realiza el corte de hoy</p>
          
          <div className="bg-gray-100 mt-28">
            <p className="text-sm uppercase text-center bg-gray-200">{formatearFecha(Date.now())}</p>
          <div className=" md:flex-col md:gap-4 flex p-2 rounded">
            <div className="w-2/5 md:w-auto md:border-b-2 border-gray-300">
              <p className="text-3xl font-bold md:text-center">Venta Total: <span className="block text-amber-500">{formatearDinero(totalVendido)}</span></p>
            </div>
            <div className="w-3/5 md:w-auto">
            <p className="text-xl font-bold">Total de Ordenes: <span>{data?.length}</span></p>
            <p className="text-xl font-bold">Productos Vendidos: <span>{productosVendidos}</span></p>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Corte
