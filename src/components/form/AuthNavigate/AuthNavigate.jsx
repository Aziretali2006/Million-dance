
import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../../service/path';

const AuthNavigate = ({location}) => {
  return (
    <Link
      to={
        location === "login"
          ? PATH.Auth.register
          : PATH.Auth.login
      }
    >
      {
        location === "login"
          ? "Зарегистрироваться"
          : "Авторизоваться"
      }
    </Link>
  )
}

export default AuthNavigate;
