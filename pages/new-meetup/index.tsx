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

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
