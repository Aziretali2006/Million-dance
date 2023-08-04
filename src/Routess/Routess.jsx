
import React from 'react';
import Header from '../components/header/Header';
import { Route, Routes } from 'react-router-dom';
import { PATH } from '../service/path';
import LayoutRoutes from '../pages/LayoutRoutes/LayoutRoutes';
import AuthRoutes from '../pages/AuthRoutes/AuthRoutes';
import Footer from '../components/footer/Footer';

const Routess = () => {
  return (
    <React.Fragment>
      <Header />
      <React.Suspense fallback={""}>
        <Routes>
          <Route path={PATH.mainPath.layout} element={<LayoutRoutes />}/>
          <Route path={PATH.mainPath.auth} element={<AuthRoutes />}/>
        </Routes>
      </React.Suspense>
      <Footer />
    </React.Fragment>
  )
}

export default Routess;
