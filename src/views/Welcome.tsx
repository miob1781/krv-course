import ToCSection from "../components/ToCSection"
import "../style/Welcome.css"
import { ReactElement } from "react"
import { SectionData } from "../types"

interface Props {
    allSectionData: SectionData[]
}

export default function Welcome({allSectionData}: Props) {
    function renderToCEntries(): ReactElement[] {
        return allSectionData.map((section: SectionData, index: number) => (
            <ToCSection
                section={section}
                index={index}
            />
        ))
    }

    return (
        <div>
            <h1>Lies die <em>Kritik der reinen Vernunft</em>!</h1>
            <p>Studiere Immanuel Kants berühmtestes Werk in deiner eigenen Geschwindigkeit.</p>
            <h2>Inhalt</h2>
            <div className="ToC">
                {renderToCEntries()}
            </div>
        </div>
    )
}