
import "./Cards.css";
import { BrowserRouter as Router, Link} from 'react-router-dom'

const Cards = () => {
  return ( 
  <div className="baap">
    
    <div className="card">
    <img src="https://bit.ly/3yHmfiK" alt="Avatar" className="img"/>
    <div class="container">
    <h3 className="heading"> Classical-Shain</h3>
    <span className="price"> 10,000Rs  </span>
    <p>
      <Router>
    <Link to = "/Cart"><button className = "button">BUY</button></Link>
    <br></br>
        </Router>
    </p>
   
    </div>  
    </div> 









    <div className="card">
    <img src="https://bit.ly/3yHmfiK" alt="Avatar" className="img"/>
    <div class="container">
    <h3 className="heading"> Classical-Shain<b></b></h3>
    <span className="price"> 10,000Rs  </span>
    <p>
    <Router>
    <Link to = "/Cart"><button className = "button">BUY</button></Link>
    <br></br>
        </Router>
        
    </p>
   
    </div>  
    </div> 




   
    </div>

    
    );
}
 
export default Cards;

// https://bit.ly/3yD6r09
// margin: 5vw 5vw 5px 5vw ;