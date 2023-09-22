import logo from './logo.svg';
import './App.css';
import { useState ,useEffect} from 'react';

function App() {
  const [name, setName] = useState(0);
const [mobile, setMobile] = useState("");
const [darkMode, setDarkMode] = useState(false);
let dependency = { name, mobile };

useEffect(() => {
console.log("UseEffect is called");
//}, [dependency]);  ***In this case it sees the dependency as an array and not a name and a predicate, so I take it that there is no dependency and the usage effect will be called for every modification, not just for the name and predicate.
}, [dependency.name,dependency.mobile]); //To solve this problem, you must specialize What do I want to show from the array to treat it as a variable and not an array
  return (
    <div className={`container ${darkMode ? "bgDark" : "bgLight"}`}>
<input
type="text"
id="name"
placeholder="Name"
onChange={(e) => setName(e.target.value)}
/>
<input
type="text"
id="mobile"
placeholder="Mobile"
onChange={(e) => setMobile(e.target.value)}
/>
<div className="darkmode">
<input
type="checkbox"
id="darkMode"
onChange={() => setDarkMode(!darkMode)}
/>
Enable dark mode
</div>
</div>
);
}
 

export default App;
