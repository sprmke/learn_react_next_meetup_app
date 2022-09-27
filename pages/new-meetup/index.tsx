import Head from 'next/head';
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { addNewMeetup } from '../../lib/new-meetup';
import { MeetupInfo } from '../../types/meetup';

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (meetupInfo: MeetupInfo) => {
    const result = await addNewMeetup(meetupInfo);
    console.log('result', result);

    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name='desription'
          content='Add your own meetups and create amazing networking opportunities,'
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
