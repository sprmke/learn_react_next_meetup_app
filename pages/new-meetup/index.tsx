import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { MeetupInfo } from '../../types/meetup';

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (meetupInfo: MeetupInfo) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupInfo),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    console.log('data', data);
    router.push('/');
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
