import { MeetupInfo } from '../../types/meetup';
import classes from './MeetupDetail.module.css';

const MeetupDetail = ({ title, description, address, image }: MeetupInfo) => {
  return (
    <section className={classes.detail}>
      <img src={image} alt='Meetup1' />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetail;
