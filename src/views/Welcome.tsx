import ToC from "../components/ui/ToC"
import { SectionData } from "../types"
import "../style/Welcome.css"

interface Props {
    sectionsData: SectionData[]
}

export default function Welcome({ sectionsData }: Props) {
    return (
        <div className="Welcome">
            <h1>Lies die <em>Kritik der reinen Vernunft</em>!</h1>
            <p>Studiere Immanuel Kants berühmtestes Werk in deiner eigenen Geschwindigkeit.</p>
            <h2>Inhalt</h2>
            <ToC className="ToC" sectionsData={sectionsData} tocType="welcome" />
        </div>
    )
}