import { MongoClient } from 'mongodb';

// POST /api/new-meetup

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const data = req.body;

      const MONGODB_CONNECTION_STRING =
        process.env.REACT_APP_MONGODB_CONNECTION_STRING ?? '';

      // connect to database
      const client = await MongoClient.connect(MONGODB_CONNECTION_STRING);
      const db = client.db();

      // get the meetups collection and insert meetup form data
      const meetupsCollection = db.collection('meetups');
      const result = await meetupsCollection.insertOne(data);

      // close the database connection
      client.close();

      // return a response with status and json message data
      res.status(201).json({ message: 'Meetup Inserted' });
    } catch (error) {
      console.log('error', error);
    }
  }
};

export default handler;
