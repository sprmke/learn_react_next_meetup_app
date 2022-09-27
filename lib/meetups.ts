import { MongoClient, ObjectId } from 'mongodb';
import { MeetupInfo } from '../types/meetup';

const MONGODB_CONNECTION_STRING =
  process.env.REACT_APP_MONGODB_CONNECTION_STRING ?? '';

export const getMeetups = async (projection = {}) => {
  // connect to database
  const client = await MongoClient.connect(MONGODB_CONNECTION_STRING);
  const db = client.db();

  // get meetups list
  const meetupsCollection = db.collection('meetups');
  const meetupsArray = await meetupsCollection.find({}, projection).toArray();
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

export const getMeetupDetail = async (meetupId: string) => {
  // connect to database
  const client = await MongoClient.connect(MONGODB_CONNECTION_STRING);
  const db = client.db();

  // get meetup detail
  const meetupsCollection = db.collection('meetups');
  const meetupDetail = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  // close the database connection
  client.close();

  return meetupDetail;
};
