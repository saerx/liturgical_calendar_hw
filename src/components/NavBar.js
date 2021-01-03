import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {

        return (
            <>
                <ul id="nav-bar-link">
                    <li>
                        <Link to="/">Calendar</Link>
                    </li>
                    <li>
                        <Link to="/nicebible">A Great Pic of the Bible</Link>
                    </li>
                </ul>
            </>
        )

}

export default NavBar