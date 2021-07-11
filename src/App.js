import Homepage from "./features/posts/HomePage.js";
import NavBar from "./features/navBar/NavBar";
import Users from "./features/users/Users";
import SinglePost from "./features/posts/SinglePost/SinglePost";
import Account from "./features/account/Account";
import Login from "./features/login/Login.js";
import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom';
import { useEffect} from "react";
import ProtectedRoute from "./features/protectedRoute/ProtectedRoute.js";
import { useSelector } from "react-redux";

function App() {

  const authenticated = useSelector(state=>state.login.isAuthenticated)
  console.log(authenticated)

  useEffect(()=>{
    const viewportHeight = window.innerHeight*.01;
    const root = document.querySelector(':root');
    root.style.setProperty('--height',`${viewportHeight}px`);
  },[])
 
  return (
    <>
      {authenticated?<NavBar></NavBar>:null}
      <Switch>
        <Route exact path='/login'>
          {authenticated? <Redirect to='/home'></Redirect> : <Login></Login>}
        </Route>
        <ProtectedRoute exact path='/home' component={Homepage}/>
        <Route exact path='/users'>
          <Users></Users>
        </Route>
        <Route exact path='/account'>
          <Account></Account>
        </Route>
        <Route exact path='/post/:id' component={SinglePost}/>
        <Redirect from='/' to='/login'/>
      </Switch>
    </>
  );
}

export default App;
