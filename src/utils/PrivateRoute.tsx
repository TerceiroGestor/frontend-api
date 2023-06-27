import { ReactNode } from 'react';
import { Route, redirect } from 'react-router-dom';


interface PrivateRouteProps {
  path: string;
  component: () => JSX.Element;
}


const PrivateRoute = ({ component: Component }:PrivateRouteProps) => {
  const auth = { 'token': false };
  return (
    <Route>
      <>
        {!auth.token ? redirect("/login"): <Component />}
      </>
    </Route>
  )

}

export default PrivateRoute;

