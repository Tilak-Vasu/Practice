import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import Post from './pages/Post';

function App(){
  return(
    <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} >
          <Route path=":id" element={<Post />} />
          </Route>
      </Routes>
    </Router>
    );
}

export default App;


// {
//   "name": "react-blog-app",
//   "version": "1.0.0",
//   "private": true,
//   "dependencies": {
//     "react": "^18.1.0",
//     "react-dom": "^18.1.0",
//     "react-router-dom": "^6.28.0",
//     "web-vitals": "^3.5.2"
//   },
//   "scripts": {
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
//   },
//   "devDependencies": {
//     "react-scripts": "latest"
//   }
// }
