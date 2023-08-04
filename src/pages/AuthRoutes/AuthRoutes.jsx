
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH } from '../../service/path';
import { AuthPages } from '../Lazy';
import { Providers } from '../../providers';
import useLocations from '../../hooks/useLocations';

const AuthRoutes = () => {
  const { token , user} = Providers.useAuth();
  const { actions } = useLocations();

  React.useEffect(() => {
    if(user && token) {
      actions.goToMain();
    }
  })


  return (
    <React.Fragment>
      <Routes>
        <Route path={PATH.authPath.register} element={<AuthPages.Register />}/>
        <Route path={PATH.authPath.login} element={<AuthPages.Login />}/>
      </Routes>
    </React.Fragment>
  )
}

export default AuthRoutes;
