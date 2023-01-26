import ToCSection from "../components/ToCSection"
import { ReactElement } from "react"
import { SectionData } from "../types"
import "../style/Welcome.css"

interface Props {
    sectionsData: SectionData[]
}

export default function Welcome({ sectionsData }: Props) {
    function renderToCEntries(): ReactElement[] {
        return sectionsData.map((sectionData: SectionData, index: number) => (
            <ToCSection
                key={sectionData.path}
                sectionData={sectionData}
                numberOfSection={index + 1}
                includeDescription={true}
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