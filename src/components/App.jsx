import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import {EventsPage} from '../pages/EventsPage'
import { HomePage } from '../pages/HomePage';
import {EventsSubPage} from '../pages/EventsSubPage'
import { SearchPage } from '../pages/SearchPage';
import { EventDetailesPage } from '../pages/EventDetailesPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />}>
          <Route path=":eventId" element={<EventsSubPage />} />
        </Route>
        <Route path="search" element={<SearchPage />}>
          <Route path=":eventId" element={<EventsSubPage />} />
        </Route>
        <Route
          path="events/:eventId/detailes"
          element={<EventDetailesPage />}
        />
        <Route
          path="search/:eventId/detailes"
          element={<EventDetailesPage />}
        />
      </Route>
    </Routes>
  );
};
