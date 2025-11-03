import {useTheme} from '../context/ThemeContext';
function ThemeToggle(){
    const {theme,toggleTheme} = useTheme();

    return(
        <button onClick={toggleTheme}  className='theme-tgl'> {theme==="light"?"Dark":"Light"}</button>
    );
}
export default ThemeToggle;