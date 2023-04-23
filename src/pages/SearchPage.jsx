import { fetchEventsByName } from '../servises/eventsApi';
import { useSearchParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const SearchPage = () => {
  const [events, setEvent] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
    const eventName = searchParams.get('eventName');
    const location = useLocation();

    useEffect(() => {
      if (eventName) fetchEventsByName(eventName).then(el => setEvent(el));
  }, [eventName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ eventName: form.elements.eventName.value });
    form.reset();
  };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <input type="text" name="eventName" />
          <button type="submit">Search</button>
        </form>
        <ul>
          {events.length>0 &&
            events.map(({ name, id }) => (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {name}
                </Link>
              </li>
            ))}
        </ul>
        <Outlet />
      </>
    );
};
