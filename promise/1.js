import {useState, useEffect} from 'react';

function App(){
    
const [userData,setUserData] = useState(null);
const [loading,setLoading] = useState(true);
const [error,setError] = useState(null);

useEffect(() => {
const getUserData = new Promise((resolve , reject) => {
	let success = true;
	setTimeout(()=> {
		if(success){resolve({user:"Tilak",age:22});}
		else {reject("User data not fetched");}

},1000);

});

getUserData
    .then((result)=>{
	setUserData(result);
	setLoading(false);
})
    .catch((err) => {
	setError(err);
	setLoading(false);
});

});

if (loading){
	return <h1>Loading....</h1>;
}

if (error) {
return <h1>Error is there</h1>;

}

return (
<>
user: {userData.user} , <br/>
age : {userData.age}
</>
);
}
export default App;