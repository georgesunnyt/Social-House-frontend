import PostList from "./features/posts/PostsList";
import NavBar from "./features/navBar/NavBar";
import Users from "./features/users/Users";
import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom';
import { useEffect } from "react";

function App() {

  useEffect(()=>{
    const viewportHeight = window.innerHeight*.01;
    const root = document.querySelector(':root');
    root.style.setProperty('--height',`${viewportHeight}px`);
  },[])
 
  return (
    <>
      <NavBar></NavBar>
      <Switch>
        <Route exact path='/posts'>
          <PostList></PostList>
        </Route>
        <Route exact path='/users'>
          <Users></Users>
        </Route>
        <Redirect from='/' to='/posts' ></Redirect>
      </Switch>
    </>
  );
}

export default App;
