import {useQuery} from '@tanstack/react-query';
import axios from'axios';

const fetchUsers = async() => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    return res.data;
};

function Users(){
    const{data : users , isLoading , isError} = useQuery(['users'],fetchUsers);

    if(isLoading) return<div>Loading Users</div>;
    if(isError) return <div>Error Found while searching Users</div>;

    return(
        <div>
            <h2>Users List:</h2>
            <ul>
                {users.map(user=>(
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Users;