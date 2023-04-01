import { Suspense, createElement } from 'react';
import { unstable_HistoryRouter as HistoryRouter, Navigate, Route, Routes } from 'react-router-dom';

import PageLoading from './components/PageLoading/Index';
import PageLayout from './layout/index';
import { routes } from './router/index';
import { Exception403, Exception404, Exception500, Login } from './router/route';
import history from './utils/history';

const AuthRouter = () => {
  return <PageLayout />;
};

export const App = () => {
  const baseName = import.meta.env.VITE_API_ROUTER_URL;
  return (
    <HistoryRouter history={history} basename={baseName}>
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path={'/'} element={<Navigate to="/chat" replace />}></Route>
          <Route element={<AuthRouter />}>
            {routes.map(({ path, isHasParams, component: Component, element }) => (
              <Route
                key={path}
                path={path}
                element={isHasParams ? <>{createElement('div', { path }, <Component />)}</> : element}
              />
            ))}
          </Route>
          <Route path={'/login'} element={<Login />}></Route>
          <Route path={'/*'} element={<Exception404 />}></Route>
          <Route path={'/403'} element={<Exception403 />}></Route>
          <Route path={'/500'} element={<Exception500 />}></Route>
        </Routes>
      </Suspense>
    </HistoryRouter>
  );
};
