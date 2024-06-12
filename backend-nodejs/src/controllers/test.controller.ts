import { Router } from "express";
import productRouter from "../routes/products.route";
const router = Router();

router.use("/products", productRouter);
async function main() {
    const { MongoClient } = require("mongodb");
    // Replace the uri string with your MongoDB deployment's connection string.
    const uri = "mongodb://localhost:27017/";
    const client = new MongoClient(uri);
    try {
      // Connect to the MongoDB cluster
      await client.connect();
  
      // Connect to the specific database
      const database = client.db("testDB"); // Replace with your database name
      console.log("Connected successfully to database");
  
      // Connect to a collection
      const collection = database.collection("testCollection"); // Replace with your collection name
  
      // Insert a document
      const doc = { name: "John Doe", age: 30, city: "New York" };
      const result = await collection.insertOne(doc);
      console.log(`New document inserted with the _id: ${result.insertedId}`);
  
      // Find a document
      const query = { name: "John Doe" };
      const user = await collection.findOne(query);
      console.log("Found document:", user);
    } catch (err) {
      console.error(err);
    } finally {
      // Close the connection
      await client.close();
    }
  }
  main().catch(console.error);