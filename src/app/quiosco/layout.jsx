'use client'
import { QuioscoProvider } from "@/context/QuioscoProvider"
import Sidebar from '@/components/Sidebar'
import Pasos from '@/components/Pasos'
import NotificacionModal from '@/components/NotificacionModal'

export default function QuioscoLayout({children}) {


  return (
    <>          
        <QuioscoProvider>
            <NotificacionModal/>
            <section className="md:flex" id='modal'>
            
                <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                    <Sidebar/>
                </aside>

                <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                    <div className='p-10'>
                        <Pasos/>
                        {children}
                    </div>
                </main>
            </section>
            </QuioscoProvider>

    </>
  )
}
