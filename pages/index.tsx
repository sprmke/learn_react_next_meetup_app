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
    // this page will be pre-generate every 1hour (3600s)
    // if there are request coming to this page
    revalidate: 3600,
  };
};

export default HomePage;
