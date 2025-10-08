import {useState,useEffect} from 'react';
function App() {
    //Search Autocomplete: input field with debounce (simulate API).

        const [inp,setInp] = useState('');
        const [sug,setSug] = useState([]);
        const [load,setLoad] = useState(false);

    const words = ['apple','orange','banana','berries','grapes','melon'];
    
        const hIc = ((e) => {
            setInp(e.target.value);
            console.log(e.target.value);
        });

    useEffect(()=>{
        if(!inp){ 
            setSug([]); 
                return;}
        setLoad(true);
            const timeoutId = setTimeout(()=>{
                    const filteredSugg = words.filter(word => 
                        word.toLowerCase().includes(inp.toLowerCase()));
                        setSug(filteredSugg);
                        setLoad(false);
            },500);
        return () => clearTimeout(timeoutId); 
    },[inp]);
    return(
    <>
    <input type="text" value={inp} placeholder="enter Fruuit" onChange={hIc} />
        {load && <p>Loading....</p>}
        {sug.length>0 && (
        <ul>{sug.map((suggestion,i) => (
            <li key={i}> {suggestion}</li>
        ))}</ul>
        )}
        {sug.length === 0 && inp && !load &&(
        <p>No suggestion Found</p>
        )}
    </>
);
}

export default App;