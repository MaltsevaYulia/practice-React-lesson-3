import { Navigation } from 'components/Navigation/Navigation';
import { Outlet, useLocation } from 'react-router-dom';

export const Layout = () => {
  const location=useLocation()
  
  return (
    <>
      {!location.pathname.includes('detailes') && (
        <>
          <header>
            <Navigation />
          </header>
        </>
      )}
      <main>
        <Outlet />
      </main>
    </>
  );
};
