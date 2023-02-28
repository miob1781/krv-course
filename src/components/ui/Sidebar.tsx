import { ReactElement } from "react"
import { Link } from "react-router-dom"
import { sectionsData } from "../../consts/sections-data"
import { SectionData } from "../../types"
import "../../style/Sidebar.css"

/** sidebar with navbar, Kant image and table of content */
export default function Sidebar() {

    /** returns title of table of content in Sidebar */
    function renderTitles(): ReactElement[] {
        return sectionsData.map((sectionData: SectionData, index: number) => (
            <p key={sectionData.lessonId} className="sidebar-title-cont">
                <span className="sidebar-num">{`${index + 1}. `}</span>
                <Link
                    to={`/section-${sectionData.lessonId}`}
                    className="sidebar-title"
                >{sectionData.title}</Link>
            </p>
        ))
    }

    return (
        <div className="Sidebar">
            <h3>Inhalt</h3>
            <div>{renderTitles()}</div>
        </div>
    )
}