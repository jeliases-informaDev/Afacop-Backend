import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { env } from './env.js';

// Con la corrección del schema, esta ruta ahora sí encontrará el archivo físico
import { PrismaClient } from '../../generated/prisma/index.js'; 

const { Pool } = pg;
const pool = new Pool({ connectionString: env.DATABASE_URL });

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export default prisma;