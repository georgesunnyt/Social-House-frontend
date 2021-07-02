import PostList from "./features/posts/PostsList";
import NavBar from "./features/navBar/NavBar";
import Users from "./features/users/Users";
import SinglePost from "./features/posts/SinglePost/SinglePost";
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
        <Route exact path='/post/:id' component={SinglePost}/>
        <Redirect from='/' to='/posts' ></Redirect>
      </Switch>
    </>
  );
}

export default App;
