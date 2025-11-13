// Posts.jsx
import {Link , Outlet} from 'react-router-dom';
function Posts() {
const posts = [
  {id:1,title:"Tilak",content:"He is very smart and handsome"},
  {id:2,title:"Lav",content:"He is very small and cute"},
  {id:3,title:"Kart",content:"He is very shy and honest"}
];
  return(
    <>
    <div style={{padding: "1rem"}}>
    <h2>Posts</h2>
      <ul>
      {posts.map(post=>(
      <li key={post.id}>
      <Link to={`${post.id}`}>{post.title} </Link>
      </li>
      ))}
      </ul>
      <Outlet context= {{posts}} />
    </div>
    </>
  );
}
export default Posts;