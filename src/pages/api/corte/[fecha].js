import { PrismaClient } from "@prisma/client"

export default async function handler(req, res){
    
    const prisma = new PrismaClient()

    if(req.method === 'GET') {
        const { fecha } = req.query 
        //console.log(req.query.id) // recuperar ID que envío .id viene del nombre del archivo [id] ya que lo estoy pasando por medio de una peticion
            const ordenActualizada = await prisma.orden.findMany({
                where:{
                    fecha: '1686020331335' 
                }
            })
        res.status(200).json(ordenActualizada)
    }
}