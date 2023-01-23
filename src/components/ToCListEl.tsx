import { ReactElement, useState } from "react"
import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import "../style/ToCListEl.css"

interface propsType {
    children?: ReactNode,
    path: string,
    sectionTitle: string,
    numberOfSection?: number,
    description?: string
}

export default function ToCListEl({children, path, sectionTitle, numberOfSection, description}: propsType) {
    const [expand, setExpand] = useState(false)

    const iconStyle = { cursor: "pointer" }

    const icon: ReactElement = expand
        ? <FontAwesomeIcon icon={faAngleUp} style={iconStyle} title="Details verbergen" onClick={() => setExpand(false)} />
        : <FontAwesomeIcon icon={faAngleDown} style={iconStyle} title="Details zeigen" onClick={() => setExpand(true)} />


    return (
        <div className="ToCListCont">
            <div>
                {description && icon}
                <Link to={path} className="ToCTitle">{numberOfSection && `${numberOfSection}. `}{sectionTitle}</Link>
            </div>
            <p style={{marginLeft: "33px"}}>{expand && description}</p>
            <div style={{marginLeft: "60px"}}>{expand && children}</div>
        </div>
    )
}