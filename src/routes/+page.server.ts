import { listTables } from "../database/utils";

export async function load() {
    // check if authenticated or not

    const tables = await listTables();
    return {
        tables: tables
    };
}