'use client';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useQuiosco } from '@/context/QuioscoProvider';



const pasos = [
    {paso:1, nombre: 'Menú', url: '/quiosco'},
    {paso:2, nombre: 'Resumen', url:'/quiosco/resumen'},
    {paso:3, nombre: 'Datos y Total', url:'/quiosco/total'}
]

const Pasos = () => {

   const {handleChangePasos} = useQuiosco()
   const router = useRouter()
   const pathname = usePathname();

   const calcularProgreso = () => {
        let valor
        if(pathname === "/quiosco"){
            valor =5
        }else if(pathname === "/quiosco/resumen"){
            valor = 50
        } else {
            valor = 100
        }
        return valor
   }
  
  return (
    <>

        <div className="flex justify-between ">
            {pasos.map(paso => (
                <button
                    key={paso.paso}
                    className="text-xl font-bold"
                    onClick={() => {
                        router.push(paso.url)
                    }}
                >
                    {paso.nombre}
                </button>
            ))}
        </div>
        <div className='bg-gray-100 mb-10 '>
            <div className=' duration-700 transition-[width]  rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white w-10 ' style={{width:`${calcularProgreso()}%`}}>
            </div>
        </div>
    </>
  )
}

export default Pasos
