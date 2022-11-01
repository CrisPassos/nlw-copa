import Fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

// dispara logs
const prisma = new PrismaClient({
    log: ['query'],
})

// startup da aplicação
async function boostrap() {
    // faz log da aplica√ão

    const fastify = Fastify({
        logger: true,
    })

    await fastify.register(cors, {
        origin: true,
    })

    fastify.get('/pools/count', async () => {
        // promises
        // const pools = await prisma.pool.findMany({
        //     where: {
        //         code: {
        //             startsWith: 'C'
        //         }
        //     }
        // })

        const count = await prisma.pool.count()
        return { count }
    })

    await fastify.listen({ port: 3333, /*host: '0.0.0.0'*/ })
}


boostrap(); 