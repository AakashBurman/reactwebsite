import Inr from "./Inr";
import EURO from "./Euro";
import USD from "./USD";

//import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as 
  Switch,
  Route
  
} from "react-router-dom";
import './App.css';
import Nav from "./nav"


function App() {
  return (
    <>
<Nav/>

<Switch>
<Route exact path ="/"> 
<Inr/>
</Route>
<Route exact path ="/Euro"> 
<EURO/>
</Route>
<Route exact path ="/Usd"> 
<USD/>
</Route>
<Route exact path ="/Profile"> 
<USD/>
</Route>
<Route exact path ="/Cart"> 
<USD/>
</Route>

</Switch>





   </>
  );
}

export default App;

// body{
//   background: url(https://bit.ly/3jKAYoy) no-repeat center center fixed; 
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   -o-background-size: cover;
//   background-size: cover;
// }
// 