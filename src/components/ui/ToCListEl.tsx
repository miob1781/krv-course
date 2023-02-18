import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { SectionData } from "../../types"
import "../../style/ToCListEl.css"

interface Props {
    sectionData: SectionData
    numberOfSection?: number
    lessonDone?: boolean
    disabled?: boolean
}

export default function ToCListEl({ sectionData, numberOfSection, lessonDone, disabled }: Props) {
    const { lessonId, title, pageNumbers } = sectionData

    const checkmark: JSX.Element = <FontAwesomeIcon className="toc-checkmark" icon={faCircleCheck} />

    function getClassName(): string {
        let className: string
        if (!pageNumbers) {
            className = "toc-list-inner-cont"
        } else {
            if (disabled) {
                className = "toc-sublist-inner-cont disabled"
            } else {
                className = "toc-sublist-inner-cont"
            }
        }
        return className
    }

    return (
        <p className={getClassName()}>
            {numberOfSection && <span className="toc-list-num">{`${numberOfSection}. `}</span>}
            <Link to={`/section-${lessonId}`} className="toc-title">{title}{pageNumbers && `: ${pageNumbers}`}{lessonDone && checkmark}</Link>
        </p>
    )
}