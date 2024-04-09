import { listTables } from "../database/utils";

export async function load() {
    
    const tables = await listTables();

    return {
        tables:tables
    };
}