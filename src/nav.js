import "./nav.css";
import WatchRoundedIcon from '@material-ui/icons/WatchRounded';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import LocalMallIcon from '@material-ui/icons/LocalMall';

const Nav = () => {
    return ( 
        <header className='navbar'>
        <div className="logo" onclick="window.location.href='http://www.google.com';"><WatchRoundedIcon/></div>
        <div className='navbar__title '>TIMZEE</div>
        <div className='navbar__item'><PersonIcon/> </div>
        <div className='navbar__item'><SearchIcon/></div>
        <select name="currency" className="navbar__itemB">
             <option value="INR"> INR</option>
            <option value="EUR">EUR</option>
           <option value="INR"> INR</option>
           
            </select>
        <div className='navbar__item'><LocalMallIcon/></div> 
        <div className='navbar__item'><MenuIcon/></div> 
        </header>
     );
}
 
export default Nav;