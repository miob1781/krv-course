import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import "../../style/NavBar.css"

interface Props {
    smallScreen?: boolean
}

export default function NavBar({smallScreen = false}: Props) {
    return (
        <nav className={smallScreen ? "NavBar small" : "NavBar"}>
            <Link to="/">
                <FontAwesomeIcon icon={faHouse} />
            </Link>
            <Link to="/">
                <FontAwesomeIcon icon={faUser} />
            </Link>
        </nav>
    )
}