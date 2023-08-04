
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH } from '../../service/path';
import { LayoutPages } from "../Lazy";
import { Providers } from '../../providers';
import useLocations from '../../hooks/useLocations';

const LayoutRoutes = () => {
  const {token} = Providers.useAuth();
  const { actions } = useLocations();

  React.useEffect(() => {
    if(token === undefined) {
      actions.goToLogin();
    }
  })

  return (
    <React.Fragment>
      <Routes>
        <Route path={PATH.layoutPath.instructor} element={<LayoutPages.Instructor />}/>
        <Route path={PATH.layoutPath.schedule} element={<LayoutPages.Schedule />}/>
        <Route path={PATH.layoutPath.home} element={<LayoutPages.Home />}/>
        <Route path={PATH.layoutPath.faq} element={<LayoutPages.Faq />}/>
      </Routes>
    </React.Fragment>
  )
}

export default LayoutRoutes;
