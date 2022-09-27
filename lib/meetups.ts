import { MongoClient } from 'mongodb';
import { MeetupInfo } from '../types/meetup';

export const getMeetups = async () => {
  const MONGODB_CONNECTION_STRING =
    process.env.REACT_APP_MONGODB_CONNECTION_STRING ?? '';

  // connect to database
  const client = await MongoClient.connect(MONGODB_CONNECTION_STRING);
  const db = client.db();

  // get meetups list
  const meetupsCollection = db.collection('meetups');
  const meetupsArray = await meetupsCollection.find().toArray();
  const meetups: MeetupInfo[] = meetupsArray.map((meetup) => ({
    id: meetup._id.toString(),
    title: meetup.title,
    image: meetup.image,
    description: meetup.description,
    address: meetup.address,
  }));

  // close the database connection
  client.close();

  return meetups;
};
