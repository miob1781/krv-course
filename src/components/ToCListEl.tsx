import { ReactNode } from "react"
import { Link } from "react-router-dom"
import "../style/ToCListEl.css"

type propsType = { children: ReactNode, link: string }

export default function ToCListEl({children, link}: propsType) {
    return (
        <li className="ToCListEl">
            <Link to={link}>{children}</Link>
        </li>
    )
}