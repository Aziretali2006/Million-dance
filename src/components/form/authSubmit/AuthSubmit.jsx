
import React from 'react';
import cls from "./AuthSubmit.module.scss";

const AuthSubmit = ({direct}) => {
  return (
    <div>
      <button type='submit' className={cls.auth_submit}>
        {direct}
      </button>
    </div>
  )
}

export default AuthSubmit;
