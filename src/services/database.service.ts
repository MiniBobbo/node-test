// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// Global Variables
export const collections: {records?:mongoDB.Collection} = {}

// Initialize connection
export async function connectToDatabase () {
    dotenv.config();

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);

    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    const recordsCollection: mongoDB.Collection = db.collection(process.env.RECORD_COLLECTION_NAME);

  collections.records = recordsCollection;

         console.log(`Successfully connected to database: ${db.databaseName} and collection: ${recordsCollection.collectionName}`);
 }