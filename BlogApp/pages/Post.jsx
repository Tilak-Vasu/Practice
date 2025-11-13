//Post.jsx
import {useParams,useOutletContext} from "react-router-dom";

function Post() {
    const {id} = useParams();
    const {posts} = useOutletContext();
  const post = posts.find(p=>p.id===Number(id));
  return(
  <>
  <div style={{marginTop:"1rem"}}>
  <h3>{post.title}</h3>
  <p>{post.content}</p>
  </div>
  </>
  );
}

export default Post;