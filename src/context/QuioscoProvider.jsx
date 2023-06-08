'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect, createContext, useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const  QuioscoContext = createContext()

export const QuioscoProvider = ({children}) => { 
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [nombre, setNombre] = useState('')
    const [total, setTotal] = useState(0)
 
    const router = useRouter()

    const obtenerCategorias = async () => {
        const { data } = await axios('/api/categorias')
        setCategorias(data)
    }
    
    useEffect(() => {
        obtenerCategorias()
    }, [])

    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    useEffect( () => {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad ) + total, 0)
        setTotal(nuevoTotal)
    }, [pedido])

    const handleClickCategoria = id =>{
        const categoria = categorias.filter(cat => cat.id === id)
        setCategoriaActual(categoria[0])
        router.push('/quiosco') //siempre llevarme a la categoría seleccionada aún en otra página
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleEditarCantidades = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id)
        setProducto(productoActualizar[0])
        setModal(!modal)    
    }

    const handleEliminarProducto = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
    }

    const colocarOrden = async (e) => {
        e.preventDefault()
        try {
            const {data} =await axios.post('/api/ordenes', {pedido, nombre, total, fecha: Date.now().toString()})
            
            //Resetear App
            setCategoriaActual(categorias[0])
            setPedido([])
            setNombre('')
            setTotal(0)
            toast.success('Pedido Realizado')
            setTimeout(() => {
                router.push('/quiosco')
            }, 2000)

        } catch (error) {
           console.log(error)
        }
    }

    const handleAgregarPedido = ({categoriaId,...producto}) => { //SACA A ID E IMAGEN Y EN UN NUEVO OBJETO PONE TODO LO DEMÁS QUE SERÍA PRODUCTO
        if(pedido.some(productoState => productoState.id === producto.id)){
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
            setPedido(pedidoActualizado)
            toast.success('Guardado Correctamente')
        }else{
            setPedido([...pedido, producto])
            toast.success('Agredado al Pedido')
        }
        setModal(false)
    }

    return(
        <QuioscoContext.Provider
            value={{
               categorias,
               categoriaActual,
               handleClickCategoria,
               handleSetProducto,
               modal,
               handleChangeModal,
               producto,
               handleAgregarPedido,
               pedido,
               handleEditarCantidades,
               handleEliminarProducto,
               nombre,
               setNombre,
               colocarOrden,
               total
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export const useQuiosco = () => useContext(QuioscoContext)