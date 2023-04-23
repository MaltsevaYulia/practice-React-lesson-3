import { useEffect } from "react"
import { useState } from "react"
import { fetchEventById } from "../servises/eventsApi"
import { useParams } from 'react-router-dom';

export const useFetchEvent = () => {
    const [event, setEvent] = useState(null)
    const { eventId } = useParams();


    useEffect(() => {
     fetchEventById(eventId).then(el => setEvent(el));
    
    }, [eventId])
    return event;
}