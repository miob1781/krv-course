import { sectionData } from "../consts/section-data"
import ToCListEl from "../components/ToCListEl"
import "../style/Welcome.css"
import { ReactElement } from "react"
import { SectionData } from "../types"

export default function Welcome() {
    function renderToCEntries(): ReactElement[] {
        return sectionData.map((section: SectionData, index: number) => {
            return (
                <ToCListEl
                    path={section.path}
                    sectionTitle={section.title}
                    description={section.description}
                    numberOfSection={index + 1}
                >{section.subSections && renderToCSubEntries(section.subSections)}</ToCListEl>
            )
        })
    }

    function renderToCSubEntries(data: SectionData[]): ReactElement[] {
        return data.map((section: SectionData) => {
            return (
                <ToCListEl
                    path={section.path}
                    sectionTitle={section.title}
                    description={section.description}
                />
            )
        })
    }

    return (
        <div>
            <h1>Lies die <em>Kritik der reinen Vernunft</em>!</h1>
            <p>Studiere Immanuel Kants berühmtestes Werk in deiner eigenen Geschwindigkeit.</p>
            <h2>Inhalt</h2>
            <ul className="ToC">
                {renderToCEntries(sectionData)}
            </ul>
        </div>
    )
}