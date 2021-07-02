import './SinglePost.css'
import { useSelector, useDispatch} from 'react-redux'
import { commentAdded } from '../postsSlice'; 
import { useState } from 'react';

export default function SinglePost(props) {
    const {id} = props.match.params;
    const post = useSelector(state=>state.posts.find(post=>post.id===id));
    const commentsReversed = post.comments.slice().reverse();
    const dispatch = useDispatch();

    const [comment, setComment] = useState('');

    const pushComment = () => {
        if(comment !== '') {
            dispatch(commentAdded({
                id,
                commentObject: {
                    comment,
                    author:'Polly Gray (you)',
                    dp:'https://i.imgur.com/b0hZGg4.png'
                }
            }))
        }
    }
    
    return (
        <div className='single-post-container'>
            {post?<div>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <div className="comments-container">
                    <h3>Comments</h3>
                    <div>
                        <input className="add-comment-box" value={comment} onChange={e=>setComment(e.target.value)} placeholder='Leave a comment'></input>
                        <button className='add-comment-button' onClick={pushComment}>Add comment</button>
                    </div>
                    {post.comments.length===0?<div className="no-comments">No comments yet</div>:commentsReversed.map((comment)=><div key={comment.comment}>
                        <div className="single-comment">
                            <img className={'dp'} src={comment.dp}>
                            </img>
                            <div>
                                {comment.author}: {comment.comment}
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>: <div>page not found</div>}
        </div>
    )
}