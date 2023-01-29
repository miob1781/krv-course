import { SectionData } from "../../types"
import ToC from "./ToC"
import "../../style/Sidebar.css"

interface Props {
    sectionsData: SectionData[]
}

export default function Sidebar({ sectionsData }: Props) {
    return (
        <div className="Sidebar">
            <h3>Inhalt</h3>
            <ToC className="inner-sidebar" sectionsData={sectionsData} tocType="sidebar" />
        </div>
    )
}