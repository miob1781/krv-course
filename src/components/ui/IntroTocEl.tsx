import { useContext, useMemo } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from "../../context/auth.context"
import { AuthContextTypes } from "../../types"
import "../../style/IntroTocEl.css"

interface Props {
    lessonId: string
    numberOfSection: number
    title: string
}

export default function IntroTocEl({ lessonId, numberOfSection, title }: Props) {
    const { lessonIds } = useContext(AuthContext) as AuthContextTypes

    // calculates if the respective lesson has been completed every time lessonIds has been updated
    const lessonDone: boolean = useMemo(() => {
        return lessonIds.includes(lessonId)
    }, [lessonIds])

    // calculates if the respective lesson is disabled every time lessonIds has been updated
    const lessonDisabled: boolean = useMemo(() => {
        let disabled: boolean

        // the first lesson of a section is never disabled
        if (numberOfSection === 1) {
            disabled = false

        // the second lesson is disabled if the first lesson has not been completed
        } else if (numberOfSection === 2 && !lessonIds.includes(lessonId.slice(0, 2) + 1)) {
            disabled = true

        // checks if the second-last lesson before the current lesson has been completed
        } else if (!lessonIds.includes(lessonId.slice(0, 2) + String(Number(lessonId[2]) - 2))) {
            disabled = true
        } else {
            disabled = false
        }
        return disabled
    }, [lessonIds])

    // checkmark at the end of element if lesson has been completed
    const checkmark: JSX.Element = <FontAwesomeIcon className="intro-checkmark" icon={faCircleCheck} />

    return (
        <p className={lessonDisabled ? "intro-toc-inner-cont disabled" : "intro-toc-inner-cont"}>
            {numberOfSection && <span className="intro-toc-num">{`${numberOfSection}. `}</span>}
            <Link to={`/section-${lessonId}`} className="intro-toc-title">{title}{lessonDone && checkmark}</Link>
        </p>
    )
}