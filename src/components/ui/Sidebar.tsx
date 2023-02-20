import { ReactElement } from "react"
import { Link } from "react-router-dom"
import { sectionsData } from "../../consts/sections-data"
import { SectionData } from "../../types"
import "../../style/Sidebar.css"

export default function Sidebar() {
    function renderTitles(): ReactElement[] {
        return sectionsData.map((sectionData: SectionData, index: number) => (
            <p className="sidebar-title-cont">
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