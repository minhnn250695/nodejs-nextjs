import { Db } from "mongodb";

const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017';
const dbName = 'shopee-app';
let db: Db;

const connectToDatabase = async () => {
  if (!db) {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    db = client.db(dbName);
  }
  return db;
};

export const getCollectionData = async (collectionName: string) => {
  const database = await connectToDatabase();
  return database.collection(collectionName).find({}).toArray();
};