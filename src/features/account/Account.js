import './Account.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import PostList from '../posts/PostsList/PostsList'
import { useEffect, useState } from 'react'

export default function Account() {

    const [coverPicYpos, setCoverPicYpos] =useState(0);
    const [profileOpacity, setProfileOpacity] =useState(1)

    const handleScroll = () => {
        let x = document.documentElement.scrollTop;
        if(window.screen.width <= 600) {
            setCoverPicYpos(x/1.1)
            setProfileOpacity((90-x/2))
        } else {
            setCoverPicYpos(x/3)
            setProfileOpacity((90-x/4))
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll',handleScroll)
        return ()=> {
            window.removeEventListener('scroll',handleScroll)
        }
    },[])

    return(
        <>
            <div className='account-main-container'>
                <img className='cover-pic' style={{objectPosition: `50% ${coverPicYpos}%`}} src='https://images8.alphacoders.com/885/885522.jpg' alt=''></img>
                <div className='account-card-flex-container' style={{transform: `perspective(200px) translateZ(-${coverPicYpos}px)`, opacity:`${profileOpacity}`}} >
                    <img className='profile-pic' src='https://i.imgur.com/b0hZGg4.png' alt=''></img>
                    <div className='card-details'>
                        <h1>Polly Gray</h1>
                        <h3>Company Treasurer at Shelby Private Limited</h3>
                        <div>
                            <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                            <span> Birmingham</span>
                        </div>
                    </div>
                </div>
            </div>
            <PostList user={'Polly Gray (you)'}></PostList>
        </>
    )
}