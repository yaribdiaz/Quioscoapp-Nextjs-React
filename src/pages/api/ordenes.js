import { PrismaClient } from "@prisma/client"


export default async function handler(req, res) {

    const prisma = new PrismaClient()

    // Obtener Ordenes
    const ordenes = await prisma.orden.findMany({
        where:{
            estado:false
        }
    })
    res.status(200).json(ordenes)

    //Crear Ordenes
    if(req.method === 'POST'){
        const orden = await prisma.orden.create({ //orden: viene del modelo de la BD
            data:{
                nombre: req.body.nombre,
                total: req.body.total,
                fecha: req.body.fecha,
                pedido: req.body.pedido
            }
        })
        res.status(200).json(orden)
    }

}