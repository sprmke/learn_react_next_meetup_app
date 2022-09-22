import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { MeetupInfo } from '../../types/meetup';

const NewMeetupPage = () => {
  const addMeetupHandler = (meetupInfo: MeetupInfo) => {
    console.log('meetupInfo::', meetupInfo);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
