import logo from "../../Assets/25481-removebg-preview.png";
import "./Navbar.scss";
import { Link } from 'react-router-dom';
import 'animate.css';
const Navbar = () => {
    return <>
        <div className="navbar_main" >
            <div className="nav_left_section " >
                <div className="logo" >
                    <img className="animate__animated animate__swing" src={logo} />
                </div>
                <div className="navbar_list" >
                    <ul>
                        <li> <Link to="/" > Home</Link> </li>
                        <li> <Link to="/add" >Publish</Link> </li>
                    </ul>
                </div>
            </div>
            <div className="nav_right_section" >
                <div className="profile_menu" >
                    <div className="prof_icon" >
                        <i className="fa-solid fa-user"></i>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Navbar;