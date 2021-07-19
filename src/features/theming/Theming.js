import { useEffect, useState } from 'react';
import './Theming.css'
import axios from 'axios';

export default function Theming() {

    const [blackSelected, setBlackSelected] = useState('')
    const [whiteSelected, setWhiteSelected] = useState('')
    const [sunshineSelected, setSunshineSelected] = useState('')
    const [tealSelected, setTealSelected] = useState('')
    const root = document.querySelector(':root')
    const handleTheme = (theme) => {
        resetSelection();
        switch(theme) {
            case 'dark':
                root.style.setProperty('--primary-color','black');
                root.style.setProperty('--secondary-color','rgb(34, 34, 34)')
                root.style.setProperty('--font-color', 'white');
                root.style.setProperty('--comment-line-color', 'black');
                setBlackSelected('selected')
            break;
            case 'classic':
                root.style.setProperty('--primary-color','hsl(0, 0%, 82.4%)');
                root.style.setProperty('--secondary-color','white')
                root.style.setProperty('--font-color', 'black');
                root.style.setProperty('--comment-line-color', 'white');
                setWhiteSelected('selected')
            break;
            case 'sunshine':
                root.style.setProperty('--primary-color','hsl(33.7, 100%, 61.6%)');
                root.style.setProperty('--secondary-color','white')
                root.style.setProperty('--font-color', 'black');
                root.style.setProperty('--comment-line-color', 'white');
                setSunshineSelected('selected')
            break;
            case 'teal':
                root.style.setProperty('--primary-color','teal');
                root.style.setProperty('--secondary-color','white')
                root.style.setProperty('--font-color', 'black');
                root.style.setProperty('--comment-line-color', 'white');
                setTealSelected('selected')
            break;
            default:
        }
        localStorage.setItem('primary-color',root.style.getPropertyValue('--primary-color'))
        localStorage.setItem('secondary-color', root.style.getPropertyValue('--secondary-color'))
        localStorage.setItem('font-color',root.style.getPropertyValue('--font-color'))
        localStorage.setItem('comment-line-color',root.style.getPropertyValue('--comment-line-color'))
    }

    const resetSelection = () => {
        setBlackSelected('');
        setWhiteSelected('');
        setSunshineSelected('');
        setTealSelected('');
    }

    useEffect(()=>{
        switch(root.style.getPropertyValue('--primary-color')) {
            case 'black':
                setBlackSelected('selected');
                break;
            case 'hsl(0, 0%, 82.4%)':
                setWhiteSelected('selected')
                break;
            case 'hsl(33.7, 100%, 61.6%)':
                setSunshineSelected('selected')
                break;
            case 'teal':
                setTealSelected('selected')
            default:
        }
    },[])

    return (
        <div className='theming-container'>
            <h1>Theming</h1>
            <div className={`theme-item ${whiteSelected}`} onClick={()=>handleTheme('classic')}>
                <div className='theme-name'>Classic theme</div>
                <div className='theme-preview-white'></div>
            </div>
            <div className={`theme-item ${blackSelected}`} onClick={()=>handleTheme('dark')}>
                <div className='theme-name'>Dark theme</div>
                <div className='theme-preview-black'></div>
            </div>
            <div className={`theme-item ${sunshineSelected}`} onClick={()=>handleTheme('sunshine')}>
                <div className='theme-name'>Sunshine theme</div>
                <div className='theme-preview-sunshine'></div>
            </div>
            <div className={`theme-item ${tealSelected}`} onClick={()=>handleTheme('teal')}>
                <div className='theme-name'>Teal theme</div>
                <div className='theme-preview-teal'></div>
            </div>
        </div>
    )
}