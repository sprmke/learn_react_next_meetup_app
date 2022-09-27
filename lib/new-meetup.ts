import { MeetupInfo } from '../types/meetup';

export const addNewMeetup = async (meetupInfo: MeetupInfo) => {
  const response = await fetch('/api/new-meetup', {
    method: 'POST',
    body: JSON.stringify(meetupInfo),
    headers: {
      'Content-type': 'application/json',
    },
  });

  return await response.json();
};
