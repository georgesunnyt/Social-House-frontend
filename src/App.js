import Homepage from "./features/posts/HomePage.js";
import NavBar from "./features/navBar/NavBar";
import Users from "./features/users/Users";
import SinglePost from "./features/posts/SinglePost/SinglePost";
import Account from "./features/account/Account";
import Login from "./features/login/Login.js";
import Theming from "./features/theming/Theming.js";
import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom';
import { useEffect} from "react";
import ProtectedRoute from "./features/protectedRoute/ProtectedRoute.js";
import { useSelector } from "react-redux";
import ScrollToTop from "./features/scrollToTop/ScrollToTop.js";

function App() {

  const authenticated = useSelector(state=>state.login.isAuthenticated)

  useEffect(()=>{
    const viewportHeight = window.innerHeight*.01;
    const root = document.querySelector(':root');
    root.style.setProperty('--height',`${viewportHeight}px`);
    if(localStorage.getItem('primary-color')) {
      root.style.setProperty('--primary-color', localStorage.getItem('primary-color'))
      root.style.setProperty('--secondary-color', localStorage.getItem('secondary-color'))
      root.style.setProperty('--font-color', localStorage.getItem('font-color'))
      root.style.setProperty('--comment-line-color', localStorage.getItem('comment-line-color'))
    }
  },[])
 
  return (
    <>
      {authenticated?<NavBar></NavBar>:null}
      <ScrollToTop></ScrollToTop>
      <Switch>
        <Route exact path='/login'>
          {authenticated? <Redirect to='/home'></Redirect> : <Login></Login>}
        </Route>
        <ProtectedRoute exact path='/home' component={Homepage}/>
        <ProtectedRoute exact path='/users' component={Users}/>
        <ProtectedRoute exact path='/account' component={Account}/>
        <ProtectedRoute exact path='/post/:id' component={SinglePost}/>
        <ProtectedRoute exact path='/theming' component={Theming}/>
        <Redirect from='/' to='/login'/>
      </Switch>
    </>
  );
}

export default App;
