import { useQuiosco } from "@/context/QuioscoProvider"
import Image from "next/image"

const Categoria = ({categoria}) => {

    const {nombre, icono, id} = categoria
    const {categoriaActual, handleClickCategoria} = useQuiosco()

  return (
    <div className={`${categoriaActual?.id === id ? 'bg-amber-400': ''} flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}>
      <Image
        width={100}
        height={100}
        alt={`Icono ${nombre}`}
        src={`/assets/img/icono_${icono}.svg`}
        className="sm:h-8 md:h-10 xl:h-13 2xl:h-full"
      />

      <button
        type="button"
        className="sm:text-xs md:text-lg 2xl:text-2xl text-2xl font-bold hover:cursor-pointer"
        onClick={() =>handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  )
}

export default Categoria
