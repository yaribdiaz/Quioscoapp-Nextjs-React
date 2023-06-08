import {categorias} from './data/categorias'
import {productos} from './data/productos'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const main = async () :Promise<void> =>{ //Promise<void> es de TypeScript
    try {
        await prisma.categoria.createMany({
            data: categorias //agregando todas la categorias de la carpeta de data
        })
        await prisma.producto.createMany({
            data: productos //agregando todas la categorias de la carpeta de data
        })
    } catch (error) {
        console.log(error);
    }
}

main()