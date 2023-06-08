import { PrismaClient } from "@prisma/client"

export default async function handler(req, res){
    
    const prisma = new PrismaClient()

    if(req.method === 'POST') {
        const { id } = req.query 
        //console.log(req.query.id) // recuperar ID que envío .id viene del nombre del archivo [id] ya que lo estoy pasando por medio de una peticion
            const ordenActualizada = await prisma.orden.update({
                where:{
                    id: parseInt(id) 
                },
                data:{ //data obligatorio de prisma para saber que es lo que actualizará
                    estado: true
                }
            })
        res.status(200).json(ordenActualizada)
    }
}