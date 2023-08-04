
import React from 'react'
import Container from '../../../components/container/Container'
import useLocations from '../../../hooks/useLocations';
import { FORMS } from '../../../components/form'
import { useForm } from 'react-hook-form'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/Firebase';
import { Providers } from '../../../providers';

import cls from "./Login.module.scss";

const Login = () => {
  const { actions } = useLocations();
  const { setRender } = Providers.useAuth();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm(({
    mode: "onBlur"
  }));

  function handleLogin(data) {
    signInWithEmailAndPassword(auth , data.email, data.password)
      .then((res) => {
        localStorage.setItem("accessToken" , res.user.accessToken);
        actions.goToMain();
        reset();
        setRender("Reload!")
      })
  }

  return (
    <React.Fragment>
      <Container>
        <div className={cls.login_page}>
          <div className={cls.login_page_card}>
            <h2>Authentification</h2>

            <form onSubmit={handleSubmit(handleLogin)}>
              <FORMS.Divider>
                <FORMS.TextInput 
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
              </FORMS.Divider>
              <FORMS.Divider>
                <FORMS.TextInput 
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                />
              </FORMS.Divider>
              
              <FORMS.Divider>
                <FORMS.AuthSubmit direct={"Авторизоваться"}/>
              </FORMS.Divider>
              <FORMS.AuthNavigate location={"login"}/>
            </form>
          </div>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default Login
