import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { MeetupInfo } from '../types/meetup';

const DUMMY_MEETUPS: MeetupInfo[] = [
  {
    id: 'm1',
    title: 'Meetup 1',
    description: 'Meetup1 Description',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/1280px-Restaurant_N%C3%A4sinneula.jpg',
    address: 'Meetup1 Address',
  },
  {
    id: 'm2',
    title: 'Meetup 2',
    description: 'Meetup2 Description',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/1280px-Restaurant_N%C3%A4sinneula.jpg',
    address: 'Meetup2 Address',
  },
];

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState<MeetupInfo[]>(
    [] as MeetupInfo[]
  );

  useEffect(() => {
    // send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
};

export default HomePage;
