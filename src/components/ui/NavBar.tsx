import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import "../../style/NavBar.css"

interface Props {
    smallScreen?: boolean
}

/** navbar with icons linking to start page and account page */
export default function NavBar({smallScreen = false}: Props) {
    return (
        <nav className={smallScreen ? "NavBar small" : "NavBar"}>
            <Link to="/" title="Zur Startseite">
                <FontAwesomeIcon className="home-icon" icon={faHouse} />
            </Link>
            <Link to="/account" title="Zum Account">
                <FontAwesomeIcon className="account-icon" icon={faUser} />
            </Link>
        </nav>
    )
}