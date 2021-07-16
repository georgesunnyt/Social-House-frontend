import './NavBar.css'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faArrowAltCircleRight, faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { logout } from '../login/loginSlice'

export default function NavBar() {
    
    const dispatch = useDispatch()
    const history = useHistory()
    const [navbarStyle, setNavbarStyle] = useState('nav-bar')
    const [logoutButtonStyle, setLogoutButtonStyle] = useState('')
    const [hideElement, setHideElement] = useState('')
    const [logoutMessageStyle, setLogoutMessageStyle] = useState('invisible-absolute')

    const handleLogout = () => {
        setHideElement('invisible')
        setNavbarStyle('nav-bar nav-bar-logged-out')
        setLogoutButtonStyle('invisible-absolute')
        setLogoutMessageStyle('logout-button-text')
        setTimeout(()=>{
            dispatch(logout())
            history.push('/login')
        },3000)
    }    

    return(
        <>
            <div className={navbarStyle}>
                    <div>
                        <span className={`logo ${hideElement}`}>Social House</span>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} className={hideElement}></FontAwesomeIcon>
                    </div>
                    <NavLink exact to='/home' activeClassName="selectedRoute" className={hideElement}>
                        <FontAwesomeIcon icon={faHome} ></FontAwesomeIcon>
                        <span>View posts</span>
                    </NavLink>
                    <NavLink exact to='/users' activeClassName="selectedRoute" className={hideElement}>
                        <FontAwesomeIcon icon={faUsers} ></FontAwesomeIcon>
                        <span>People</span>
                    </NavLink>
                    <NavLink exact to='/account' activeClassName="selectedRoute" className={hideElement}>
                        <FontAwesomeIcon icon={faUserCircle} ></FontAwesomeIcon>
                        <span>Account</span>
                    </NavLink>
                    <a onClick={handleLogout}>
                        <FontAwesomeIcon icon={faSignOutAlt} className={logoutButtonStyle}></FontAwesomeIcon>
                        <span className={logoutButtonStyle}>Logout</span>
                        <span className={logoutMessageStyle}>Good Bye Polly</span>
                    </a>
                    <div className='mobile-goodbye-message'>
                        Goodbye Polly
                    </div>
            </div>
        </>
    )
}