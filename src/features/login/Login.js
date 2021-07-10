import { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import './Login.css'

export default function Login(props) {

    const history = useHistory();
    const[loginFormStyle, setLoginFormStyle] = useState('login-form')
    const[buttonTextStyle, setButtonTextStyle] = useState('button-text')
    const[buttonTextLoggedStyle, setButtonTextLoggedStyle] = useState('button-text-logged')

    const handleLogin = () => {
        setLoginFormStyle('login-form login-form-logged');
        setButtonTextStyle('button-text-logged')
        setButtonTextLoggedStyle('button-text')
        setTimeout(()=>{
            sessionStorage.setItem('isAuthenticated', true)
            props.authenticate()
            history.push('/home')
        },2000)
    }

    useEffect(()=>{
        props.unAuthenticate()
    },[])

    return(
        <div className='login-container'>
            <div className='login-title'>Social House</div>
            <div className={loginFormStyle}>
                <input placeholder='username'></input>
                <input placeholder='password'></input>
                <button className='login-button user-login-button'>Login</button>
                <button className='login-button guest-login-button' onClick={handleLogin}>
                    <div className={buttonTextStyle}>
                        or Continue as  
                        <img className='dp dp-login' src='https://i.imgur.com/b0hZGg4.png'></img>
                        Polly Gray
                    </div>
                    <div className={buttonTextLoggedStyle}>
                        Welcome back Polly
                    </div>
                </button>
            </div>
        </div>
    )
}