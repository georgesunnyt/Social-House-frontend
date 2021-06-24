import { useSelector } from "react-redux";
import './PostsList.css'
import AddPost from "./AddPost/AddPost";

function PostList(props) {

    const posts = useSelector(state=>state.posts);
    const postsReversed = posts.slice().reverse()

    return(
        <div className="posts-container">
            <AddPost></AddPost>
            <h1>Posts</h1>
            {postsReversed.map((post)=>
                <div className='post-item' key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </div>)}
        </div>
    )
}

export default PostList;