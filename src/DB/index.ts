import { MongoClient } from 'mongodb';

// Connection URL
const url: string = 'mongodb://localhost:27017';
const client: MongoClient = new MongoClient(url);


export async function DBConnection() {
    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log('Connected successfully to MongoDB server');


    } catch (err) {
        console.error('Connection error', err);
    }
}


