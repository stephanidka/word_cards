import './Header.css';
// import Home from '../Home/Home';
// import Main from '../Main/Main';
// import About from '../About/About';
import logo from '../../images/logo2.png';
import { Link } from "react-router-dom";

function Header(){
    return(
                <header>
            <div className='Header'>
                <div>
                    <Link to="/home"><img src={logo} alt="logo Word Cards" className='Logo'/></Link>
                </div>
                
                <div className='Navigation'>
                    <Link to="/home">Home</Link>
                    <Link to="/game">Game</Link>
                    <Link to="/about">About</Link>
                </div>
                
            </div>
        </header>
    );
}

export default Header;