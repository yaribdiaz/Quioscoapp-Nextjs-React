'use client'
import { QuioscoProvider } from "@/context/QuioscoProvider"
import Image from "next/image";
import SidebarAdmin from "@/components/SidebarAdmin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children }) {
  
  return (
    <QuioscoProvider>
        <section className="md:flex">
              <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
                  <Image
                      width={150}
                      height={200}
                      src="/assets/img/logo.svg"
                      alt="imagen logotipo"
                  />
                  <SidebarAdmin/>
              </aside>

              <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                  <div className="p-10">
                      {children}
                  </div>
              </main>
        </section>
        <ToastContainer />
      </QuioscoProvider>
  );
}
