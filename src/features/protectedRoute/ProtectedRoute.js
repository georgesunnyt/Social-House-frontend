import { Redirect, Route } from "react-router"
import { useSelector } from "react-redux";

export default function ProtectedRoute({component: Component,computedMatch,...rest}) {
    const authenticated = useSelector(state=>state.login.isAuthenticated)
    console.log('inside protected component and ' + authenticated )
    return authenticated? 
    (<Route {...rest}>
        <Component match={computedMatch}></Component>
    </Route>): <Redirect to='/login'></Redirect> 
}   