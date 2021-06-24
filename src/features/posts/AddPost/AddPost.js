import './AddPost.css'
import { postAdded } from '../postsSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'

export default function AddPost(props) {

    const[title, setTitle] = useState();
    const[content, setContent] = useState();
    const[postStyle, setPostStyle] = useState('new-posts-collapsed')
    const[mainStyle, setMainSyle] = useState('new-posts-container-collapsed')
    const dispatch = useDispatch();

    const handleTitleChange = e => setTitle(e.target.value);
    const handleContentChange = e => setContent(e.target.value);
    
    const handlePostAdd = () => {
        if(title && content) {
            dispatch(postAdded({
                id: nanoid,
                title,
                content
            }))
        }
    }

    const handlePostExpansion = () => {
        setPostStyle(postStyle==='new-posts-collapsed'?'new-posts-expanded':'new-posts-collapsed');
        setMainSyle(mainStyle==='new-posts-container-collapsed'?'new-posts-container':'new-posts-container-collapsed')
    }

    return(
        <div className='add-post-main'>
            <div className={mainStyle}>
                <h1 onClick={handlePostExpansion}>
                    Create a new post
                    <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                </h1>
                <div className={postStyle}>
                    <h3>Title</h3>
                    <input placeholder="What's on your mind?" value={title} onChange={handleTitleChange}></input>
                    <h3>Content</h3>
                    <input value={content} onChange={handleContentChange}></input>
                    <button onClick={handlePostAdd}>Post</button>
                </div>
            </div>
        </div>

    )   
}