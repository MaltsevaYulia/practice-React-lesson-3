import { useFetchEvent } from "../hooks/useFetchEvent"
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const EventDetailesPage = () => {
const event = useFetchEvent();
    const location = useLocation()
    const navigate = useNavigate();
    console.log("🚀 ~ EventDetailesPage ~ location:", location)
    
    const handleClick = () => {
    navigate(location?.state?.from ?? '/');
}

    return (
        <>
            <button type='button' onClick={handleClick}>Go back</button>
        {event && (
          <div>
            <p>{event.name}</p>
            <img src={event.images[0].url} alt={event.name} width="300" />
            <p>{event.classifications[0].genre.name}</p>
            <p>{event.classifications[0].subGenre.name}</p>
          </div>
        )}
      </>
    );
}