import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import "../../style/NavBar.css"

interface Props {
    small?: boolean
}

/** navbar with icons linking to start page and account page */
export default function NavBar({ small = false }: Props) {
    return (
        <div className="nav-cont">
            <nav className={small ? "NavBar small" : "NavBar"}>
                <Link to="/" title="Zur Startseite">
                    <FontAwesomeIcon className="home-icon" icon={faHouse} />
                </Link>
                <Link to="/account" title="Zum Account">
                    <FontAwesomeIcon className="account-icon" icon={faUser} />
                </Link>
            </nav>
            {small && <img
                className="kant-image small"
                src="../../assets/images/Kant-image.jpg"
                alt="Immanuel Kant"
                title="Immanuel Kant"
            />}
        </div>
    )
}