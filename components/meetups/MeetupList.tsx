import { MeetupInfo } from '../../types/meetup';
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList({ meetups }: { meetups: MeetupInfo[] }) {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          description={meetup.description}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
