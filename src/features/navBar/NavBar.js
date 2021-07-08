import './NavBar.css'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faArrowAltCircleRight, faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default function NavBar(props) {
    return(
        <>
            <div className="nav-bar">
                    <div>
                        <span className='logo'>Social House</span>
                        <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
                    </div>
                    <NavLink exact to='/home' activeClassName="selectedRoute">
                        <FontAwesomeIcon icon={faHome} ></FontAwesomeIcon>
                        <span>View posts</span>
                    </NavLink>
                    <NavLink exact to='/users' activeClassName="selectedRoute">
                        <FontAwesomeIcon icon={faUsers} ></FontAwesomeIcon>
                        <span>People</span>
                    </NavLink>
                    <NavLink exact to='/account' activeClassName="selectedRoute">
                        <FontAwesomeIcon icon={faUserCircle} ></FontAwesomeIcon>
                        <span>Account</span>
                    </NavLink>
            </div>
        </>
    )
}