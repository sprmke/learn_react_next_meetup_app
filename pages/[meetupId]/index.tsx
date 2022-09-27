import Head from 'next/head';
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { getMeetupDetail, getMeetups } from '../../lib/meetups';
import { MeetupInfo } from '../../types/meetup';

interface PropsReturnedType {
  meetupData: MeetupInfo;
}

type ParamsType = {
  meetupId: string;
};

const MeetupDetailsPage = (props: PropsReturnedType) => {
  const { title, description, address, image } = props.meetupData;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='desription' content={description} />
      </Head>
      <MeetupDetail
        title={title}
        description={description}
        address={address}
        image={image}
      />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const meetups: MeetupInfo[] = await getMeetups({ _id: 1 });
  const meetupsPaths = meetups.map((meetup) => ({
    params: {
      meetupId: meetup.id,
    },
  }));
  return {
    paths: meetupsPaths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<ParamsType>): Promise<
  GetStaticPropsResult<PropsReturnedType>
> => {
  const meetupId = params.meetupId.toString();
  const meetup = await getMeetupDetail(meetupId);
  const meetupData = {
    id: meetup._id.toString(),
    title: meetup.title,
    description: meetup.description,
    address: meetup.address,
    image: meetup.image,
  };

  return {
    props: {
      meetupData,
    },
  };
};

export default MeetupDetailsPage;
