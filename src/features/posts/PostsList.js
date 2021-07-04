import { useSelector } from "react-redux";
import './PostsList.css'
import AddPost from "./AddPost/AddPost";
import { useHistory } from "react-router-dom";

function PostList(props) {

    const posts = useSelector(state=>state.posts);
    const postsReversed = posts.slice().reverse();
    const history = useHistory();

    return(
        <div className="posts-container">
            <AddPost></AddPost>
            <h1>Posts</h1>
            {postsReversed.map((post)=>
                <div className='post-item' key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <div className='profile-flex-container'>
                        <img className='dp' src={post.dp} alt={''}/><span className='author'>By {post.author}</span>
                    </div>
                    <div className='post-item-flex-row'>
                        <button className='like-button'>Like</button>
                        <div>{post.comments.length} comments</div>
                        <button className="view-button" onClick={()=>history.push(`/post/${post.id}`)}>View Post</button>
                    </div>
                </div>)}
        </div>
    )
}

export default PostList;