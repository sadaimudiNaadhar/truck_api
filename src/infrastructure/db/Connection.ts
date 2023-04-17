import { DataSource } from "typeorm";
import { dataSource } from "./DataSource";

export async function getConnection(): Promise<DataSource> {

    let connection = null;

    try {

        if (dataSource.isInitialized) {
            connection = dataSource;
        } else {
            connection = await initDataSource();
        }

        return connection;
    } catch (error) {
        throw error;
    }
}

async function initDataSource(): Promise<DataSource> {
    return dataSource.initialize();
}