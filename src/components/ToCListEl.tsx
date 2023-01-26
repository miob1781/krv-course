import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { SectionData } from "../types"
import "../style/ToCListEl.css"

interface Props {
    children?: ReactNode
    sectionData: SectionData
    numberOfSection?: number
}

export default function ToCListEl({ sectionData, numberOfSection }: Props) {
    const { path, title, pageNumbers } = sectionData

    return (
        <div className="ToCListCont">
            <Link to={path} className="ToCTitle">{numberOfSection && `${numberOfSection}. `}{title}</Link>
            <span className="page-numbers">{pageNumbers}</span>
        </div>
    )
}