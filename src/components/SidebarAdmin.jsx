'use client'
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"

const SidebarAdmin = () => {

    const pathname = usePathname()
    const router = useRouter()

    const handleClickCategoriaAdmin = (ruta) => {  
        router.push(ruta)
    }

    const sidebar = [
        {
            id:1 ,
            titulo:'Administrar Ordenes',
            ruta:'/admin',
            logo:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                 </svg>
          
        },
        {
            id:2 ,
            titulo:' Todas las Ordenes',
            ruta:'/admin/ordenes',
            logo:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
          
        }, 
        {
            id:3 ,
            titulo:'Corte del Día', 
            ruta:'/admin/corte',
            logo:   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
          
      }
    ]

  return (
    <nav className="mt-20 ">
        <div className="w-full">
            {sidebar.map(opcion => (
                
                    <button 
                        className="w-full"
                        key={opcion.id}
                        onClick={() => handleClickCategoriaAdmin(opcion.ruta)} 
                    >
                            <p 
                                className={`${pathname === opcion.ruta ? 'bg-amber-500' : '' } duration-500 transition-[background-color] flex hover:cursor-pointer hover:bg-amber-500 py-10 px-5 font-bold text-xl border rounded`}
                            >
                                <span className="mr-5">{opcion.logo}</span>
                                {opcion.titulo}
                            </p>
                    </button>
               
            ))}
        </div>
    </nav>
  )
}

export default SidebarAdmin
