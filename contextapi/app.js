import {ThemeProvider} from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";


console.log("ThemeProvider:", ThemeProvider);
console.log("ThemeToggle:", ThemeToggle);
function App(){
    return(
        
        <ThemeProvider>
        <div className="app">
        <h1>Theme Switcher</h1>
            <ThemeToggle />
        </div>
        </ThemeProvider>
        
    );
}

export default App;