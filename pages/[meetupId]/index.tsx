import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MeetupInfo } from '../../types/meetup';

interface StaticPropsType {
  meetupData: MeetupInfo;
}

type ParamsType = {
  meetupId: string;
};

const MeetupDetailsPage = ({
  title,
  description,
  address,
  image,
}: MeetupInfo) => {
  return (
    <MeetupDetail
      title={title}
      description={description}
      address={address}
      image={image}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { meetupId: 'm1' } }, { params: { meetupId: 'm2' } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<StaticPropsType> = ({
  params,
}: GetStaticPropsContext<ParamsType>) => {
  const { meetupId } = params;
  // fetch api here
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: 'Meetup 1',
        description: 'Meetup1 Description',
        address: 'Meetup1 Address',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/1280px-Restaurant_N%C3%A4sinneula.jpg',
      },
    },
  };
};

export default MeetupDetailsPage;
