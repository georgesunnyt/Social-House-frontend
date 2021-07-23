import { useDispatch, useSelector } from "react-redux";
import './PostsList.css'
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { postLiked, postUnliked, postDisliked, postUndisliked } from "../postsSlice";
import { useState } from "react";

function PostList(props) {

    let posts = useSelector(state=>state.posts);
    let username = useSelector(state=>state.login.username);
    if(props.user) {
       posts = posts.filter(post => post.author === props.user)
    }
    const postsReversed = posts.slice().reverse();
    const history = useHistory();
    const dispatch = useDispatch()
    const [counterAnimation, setCounterAnimation] = useState('')
    const [animationTriggeredId, setAnimationTriggeredId] = useState(false)

    const likeComponentStyle = (post) => {
        if (post.likes?.includes(username)) {
            return 'like-component likeSelected';
        } else if (post.dislikes?.includes(username)) {
            return 'like-component dislikeSelected';
        } else return 'like-component';
    }

    const handleReaction = (post,reaction,e) => {
        if(reaction==='like') {
            if(!post.likes?.includes(username)) {
                dispatch(postLiked({username: username, id:post.id}))
                if(post.dislikes.includes(username)) {
                    dispatch(postUndisliked({username: username, id:post.id}))
                }
                setCounterAnimation('slide-up-counter')
            } else {
                dispatch(postUnliked({username: username, id:post.id}))
                setCounterAnimation('slide-down-counter')
            }
        }
        if(reaction==='dislike') {
            if(!post.dislikes?.includes(username)) {
                dispatch(postDisliked({username: username, id:post.id}))
                if(post.likes.includes(username)) {
                    dispatch(postUnliked({username: username, id:post.id}))
                }
                setCounterAnimation('slide-down-counter')
            } else {
                dispatch(postUndisliked({username: username, id:post.id}))
                setCounterAnimation('slide-up-counter')
            }
        }
        setAnimationTriggeredId(post.id)
    }

    return(
        <div className="posts-container">
            <h1>Posts</h1>
            {postsReversed.map((post)=>
                <div className='post-item' key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <div className='profile-flex-container'>
                        <img className='dp' src={post.dp} alt={''}/><span className='author'>By {post.author}</span>
                    </div>
                    <div className='post-item-flex-row'>
                        <div className={likeComponentStyle(post)}>
                            <div className='like-counter'>
                                <div className={animationTriggeredId===post.id? counterAnimation: ''}>
                                    {post.likes?.length-post.dislikes?.length}
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faThumbsUp} onClick={(e)=>handleReaction(post,'like',e)}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faThumbsDown} onClick={(e)=>handleReaction(post,'dislike',e)}></FontAwesomeIcon>
                        </div>
                        <div>{post.comments.length} comments</div>
                        <button className="view-button" onClick={()=>history.push(`/post/${post.id}`)}>View Post</button>
                    </div>
                </div>)}
        </div>
    )
}

export default PostList;