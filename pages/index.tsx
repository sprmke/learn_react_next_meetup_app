import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
  PreviewData,
} from 'next';
import MeetupList from '../components/meetups/MeetupList';
import { getMeetups } from '../lib/meetups';
import { MeetupInfo } from '../types/meetup';

interface PropsReturnedType {
  meetups: MeetupInfo[];
}

// const HomePage = ({
//   meetups,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
//   return <MeetupList meetups={meetups} />;
// };

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ): Promise<GetServerSidePropsResult<PropsReturnedType>> => {
//   const { req, res } = context;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

const HomePage = ({
  meetups,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <MeetupList meetups={meetups} />;
};

export const getStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<PropsReturnedType>> => {
  // get meetups list
  const meetups: MeetupInfo[] = await getMeetups();

  return {
    props: {
      meetups,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 1 hr
    revalidate: 3600, // In seconds
  };
};

export default HomePage;
