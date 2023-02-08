import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import "../../style/NavBar.css"

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <Link to="/">
                <FontAwesomeIcon icon={faHouse} />
            </Link>
            <Link to="/">
                <FontAwesomeIcon icon={faUser} />
            </Link>
        </nav>
    )
}