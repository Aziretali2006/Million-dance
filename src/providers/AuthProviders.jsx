
import React from 'react';
import { AuthContexts } from '../contexts/AuthContexts';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/Firebase';

const AuthProviders = ({children}) => {
  const [token , setToken] = React.useState(null);
  const [user , setUser] = React.useState(null);
  const [state , setState] = React.useState("screen");
  const [render , setRender] = React.useState("")

  const getToken = React.useCallback(() => {
    const tokenData = localStorage.getItem("accessToken");
    if(tokenData) {
      setToken(tokenData)
    } else {
      setToken(null)
    }
  });

  const getUser = React.useCallback(() => {
    onAuthStateChanged(auth , res => {
      setUser({
        displayName: res?.displayName || "",
        email: res?.email || "",
      })
    })
  }, []);

  const changeState = React.useCallback((st) => {
    localStorage.setItem("state" , st);
    setState(st)
  } , [])

  React.useEffect(() => {
    getToken()
    getUser()
  }, [getToken , getUser , render]);

  const LogOut = React.useCallback(() => {
    localStorage.clear();
    setToken(undefined);
    setUser(null);
    setRender("Exit!");
    changeState("screen");
  }, [])


  const values = React.useMemo(() => ({
    token,
    user,
    LogOut,
    setRender,
    state
  }), [state,token , user, LogOut, setRender])

  return (
    <AuthContexts.Provider value={values}>
      {children}
    </AuthContexts.Provider>
  )
}

export default AuthProviders;
