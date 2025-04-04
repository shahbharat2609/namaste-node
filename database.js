import { MongoClient } from "mongodb";

const url = "mongodb+srv://namaste-node:Shahbharat%407@namaste-node.dr0rdup.mongodb.net/?retryWrites=true&w=majority&appName=namaste-node";
const dbName = "HelloWorld";

const client = new MongoClient(url);

const connectDB = async () => {
  try {
    await client.connect();
    console.log("✅ Connected successfully to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection("User");

    const data = {
      firstName: "John",
      lastName: "Doe",
      city: "GTA Vice City",
      phoneNumber: "9876543210",
    }
    // const insertDocument = await collection.insertOne(data);
    // console.log("Inserted document =>: ", insertDocument);

    const findResult = await collection.find({}).toArray();
    console.log("Found documents =>: ", findResult);

    const countResult = await collection.countDocuments();
    console.log('Documents count =>: ', countResult);


  //find all documents with the firstname - John
    const findNameResult = await collection.find({ firstName: "John" }).toArray();
    console.log("findNameResult =>: ", findNameResult)




    return collection;
  } catch (error) {
    console.error("❌ Connection failed:", error);
  } finally {
    await client.close();
  }
};

connectDB();