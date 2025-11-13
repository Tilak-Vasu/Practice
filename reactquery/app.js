import UserList from './components/UserList';

function App(){
    return(
        <>
        <div>
            <h1>
                React Query
            </h1>
        <UserList />
        </div>
        </>
    );
}
export default App;

//package.json
// {
//   "name": "react-query-basic",
//   "version": "1.0.0",
//   "private": true,
//   "type": "module",
//   "scripts": {
//     "dev": "vite",
//     "build": "vite build",
//     "preview": "vite preview"
//   },
//   "dependencies": {
//     "@tanstack/react-query": "^5.59.0",
//     "react": "^18.3.1",
//     "react-dom": "^18.3.1"
//   },
//   "devDependencies": {
//     "@vitejs/plugin-react": "^4.3.2",
//     "vite": "^5.4.10"
//   }
// }