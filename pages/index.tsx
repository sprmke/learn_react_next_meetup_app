import { GetStaticProps, InferGetStaticPropsType } from 'next';
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

interface MeetupsProps {
  meetups: MeetupInfo[];
}

const HomePage = ({
  meetups,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <MeetupList meetups={meetups} />;
};

export const getStaticProps: GetStaticProps<MeetupsProps> = () => {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
};

export default HomePage;
