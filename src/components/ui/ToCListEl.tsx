import { Link } from "react-router-dom"
import { SectionData } from "../../types"
import "../../style/ToCListEl.css"

interface Props {
    sectionData: SectionData
    numberOfSection?: number
}

export default function ToCListEl({ sectionData, numberOfSection }: Props) {
    const { sectionNumber, title, pageNumbers } = sectionData

    const className = !pageNumbers ? "toc-list-inner-cont" : "toc-sublist-inner-cont"

    return (
        <p className={className}>
            {numberOfSection && <span className="toc-list-num">{`${numberOfSection}. `}</span>}
            <Link to={`/section-${sectionNumber}`} className="toc-title">{title}{pageNumbers && `: ${pageNumbers}`}</Link>
        </p>
    )
}