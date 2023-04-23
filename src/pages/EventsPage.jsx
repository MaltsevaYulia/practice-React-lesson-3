import { useEffect, useState } from 'react';
import { fetchEvents } from '../servises/eventsApi'
import { Link } from 'react-router-dom'
import { Outlet, useLocation } from 'react-router-dom';
//name
export const EventsPage = () => {
    const [events, setEvent] = useState([])
    const location=useLocation()

useEffect(() => {
  fetchEvents().then(data => setEvent(data));
  
}, [])


    return (
      <>
        <ul>
          {events.map(({ name, id }) => (
            <li key={id}>
              <Link to={`${id}`} state={{from:location}}>{name}</Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </>
    );
};
