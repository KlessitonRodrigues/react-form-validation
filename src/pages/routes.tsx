import { Route, createRoutesFromElements } from 'react-router-dom';

const Router = createRoutesFromElements(
  <>
    <Route path="/*" lazy={() => import('./forms')} />
  </>,
);

export default Router;
