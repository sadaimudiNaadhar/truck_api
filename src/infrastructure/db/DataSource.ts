import { DataSource } from 'typeorm';
import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

export const dataSource = new DataSource({
    type: "postgres",
    host: process.env.TYPEORM_DB_HOST,
    port: Number(process.env.TYPEORM_DB_PORT),
    username: process.env.TYPEORM_DB_USERNAME,
    password: process.env.TYPEORM_DB_PASSWORD,
    database: process.env.TYPEORM_DB_NAME,
    synchronize: true,
    logging: true,
    entities: [join(__dirname, './entities/**/*.{ts,js}')],
    subscribers: [],
    migrations: [join(__dirname, './migrations/**/*.{ts,js}')]
});