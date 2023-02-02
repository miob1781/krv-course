import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { SectionData } from "../../types"
import "../../style/ToCListEl.css"

interface Props {
    sectionData: SectionData
    numberOfSection?: number
    tocType: string
}

export default function ToCListEl({ sectionData, numberOfSection, tocType }: Props) {
    const { path, title, pageNumbers } = sectionData

    return (
        <div className="ToCListCont">
            <span>
                {numberOfSection && `${numberOfSection}. `}
                <Link to={path} className="ToCTitle">{title}</Link>
                {tocType !== "sidebar" && ": " + pageNumbers}
            </span>
        </div>
    )
}