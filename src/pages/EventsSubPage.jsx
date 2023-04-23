import { useFetchEvent } from '../hooks/useFetchEvent';
import { Link, useLocation } from 'react-router-dom';

export const EventsSubPage = () => {
  const event = useFetchEvent();
  const location=useLocation()

  return (
    <>
      {event && (
        <div>
          <p>{event.name}</p>
          <img src={event.images[0].url} alt={event.name} width="300" />
          <Link to="detailes" state={location.state}>More info</Link>
        </div>
      )}
    </>
  );
};
