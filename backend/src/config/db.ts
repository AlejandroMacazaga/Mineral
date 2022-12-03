import mongoose from "mongoose";

class Database {

    static async connect() : Promise<void> {
        try {
            const conn = await mongoose.connect(`${process.env.MONGO_URI}`,{
                dbName : process.env.MONGO_NAME
            });
            const url = `${conn.connection.host}:${conn.connection.port}`;
            console.info(`MongoDB connected at ${url}`);
        }
        catch(error : any) {
            console.error(`${error.message}`);
            process.exit(1);
        }
    }


}

const db_connection = Database.connect;
export default db_connection;