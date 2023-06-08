'use client'
import Image from "next/image"
import { useQuiosco } from "@/context/QuioscoProvider"
import Categoria from "./Categoria"
const Sidebar = () => {

const {categorias} = useQuiosco()
//console.log(categorias)

  return (
    <>
        <Image 
          width={150} 
          height={100} 
          alt="Imagen Logotipo"
          src="/assets/img/logo.svg"
          priority={true}
        /> 
        <nav className="mt-10">
          {categorias.map(categoria => (
            <Categoria key={categoria.id} categoria={categoria}/>
          ))}
        </nav>

    </>
  )
}

export default Sidebar
