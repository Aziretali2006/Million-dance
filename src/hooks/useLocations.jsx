
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../service/path';

function useLocations() {
  const navigate = useNavigate();

  const goToFaq = React.useCallback(() => navigate(PATH.layoutPath.faq) , [navigate]);
  const goToLogin = React.useCallback(() => navigate(PATH.Auth.login) , [navigate]);
  const goToMain = React.useCallback(() => navigate(PATH.layoutPath.home) , [navigate])

  return {
    actions: {
      goToFaq,
      goToLogin,
      goToMain
    }
  }
}

export default useLocations;