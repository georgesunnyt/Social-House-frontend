import { Redirect, Route } from "react-router"

export default function ProtectedRoute({component: Component,computedMatch,...rest}) {
    const authenticated =  sessionStorage.getItem('isAuthenticated');
    return authenticated? 
    (<Route {...rest}>
        <Component match={computedMatch}></Component>
    </Route>): <Redirect to='/login'></Redirect> 
}   