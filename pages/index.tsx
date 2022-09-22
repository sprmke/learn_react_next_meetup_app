import MeetupList from '../components/meetups/MeetupList';
import { MeetupInfo } from '../types/meetup';

const DUMMY_MEETUPS: MeetupInfo[] = [
  {
    id: 'm1',
    title: 'Meetup 2',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/1280px-Restaurant_N%C3%A4sinneula.jpg',
    address: 'Meetup1 Address',
  },
  {
    id: 'm2',
    title: 'Meetup 2',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/1280px-Restaurant_N%C3%A4sinneula.jpg',
    address: 'Meetup2 Address',
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
