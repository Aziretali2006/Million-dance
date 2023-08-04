import React from 'react';
import Container from '../../../components/container/Container';
import { FORMS } from '../../../components/form';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/Firebase';
import useLocations from '../../../hooks/useLocations';

import cls from "./Register.module.scss";

const Register = () => {
  const { actions } = useLocations();

  const {
    register,
    handleSubmit,
    reset
  } = useForm(({
    mode: "onSubmit"
  }));

  function onSubmit(data) {
    createUserWithEmailAndPassword(auth , data.email , data.password) 
      .then((res) => {
        localStorage.setItem("accessToken" , res.user.accessToken);
        actions.goToLogin();
        reset();
      })
  }


  return (
    <React.Fragment>
      <Container>
        <div className={cls.register_page}>
          <div className={cls.register_page_card}>
            <h2>Registration</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <FORMS.Divider>
                <FORMS.TextInput 
                  type="text"
                  placeholder="Username"
                  {...register("username")}
                />
              </FORMS.Divider>
              <FORMS.Divider>
                <FORMS.TextInput 
                  type="email"
                  placeholder="E-mail"
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
                <FORMS.AuthSubmit direct={"Зарегистрироваться"}/>
              </FORMS.Divider>
              <FORMS.AuthNavigate location={"register"}/>
            </form>
          </div>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default Register;
