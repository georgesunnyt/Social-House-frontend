import { Redirect, Route } from "react-router"

export default function ProtectedRoute({component: Component, props, ...rest}) {
    const authenticated =  sessionStorage.getItem('isAuthenticated');
    return authenticated? 
    (<Route {...rest}>
        <Component {...props}></Component>
    </Route>): <Redirect to='/login'></Redirect> 
}   