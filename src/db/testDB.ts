const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");

    const database = client.db('yourDatabaseName');
    const gameStates = database.collection('gameStates');

    // Replace this with your game state object
    const gameState = { /* your game state data */ };

    const result = await gameStates.insertOne(gameState);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
