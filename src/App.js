import Homepage from "./features/posts/HomePage.js";
import NavBar from "./features/navBar/NavBar";
import Users from "./features/users/Users";
import SinglePost from "./features/posts/SinglePost/SinglePost";
import Account from "./features/account/Account";
import Login from "./features/login/Login.js";
import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom';
import { useEffect, useState } from "react";

function App() {

  const [authenticated, setAuthenticated] = useState(false)

  useEffect(()=>{
    const viewportHeight = window.innerHeight*.01;
    const root = document.querySelector(':root');
    root.style.setProperty('--height',`${viewportHeight}px`);
    setAuthenticated(sessionStorage.getItem('isAuthenticated'))
  },[])

  const authenticate = () => {
    setAuthenticated(sessionStorage.getItem('isAuthenticated'))
  }

  const unAuthenticate = () => {
    setAuthenticated(false)
  }
 
  return (
    <>
      {authenticated? <NavBar></NavBar>:<></>}
      <Switch>
        <Route exact path='/login'>
          <Login authenticate={authenticate} unAuthenticate={unAuthenticate}></Login>
        </Route>
        <Route exact path='/home'>
          <Homepage></Homepage>
        </Route>
        <Route exact path='/users'>
          <Users></Users>
        </Route>
        <Route exact path='/account'>
          <Account></Account>
        </Route>
        <Route exact path='/post/:id' component={SinglePost}/>
        <Redirect from='/' to='/login' ></Redirect>
      </Switch>
    </>
  );
}

export default App;
