import { ReactElement } from "react"
import WelcomeTocSection from "../components/ui/WelcomeTocSection"
import { sectionsData } from "../consts/sections-data"
import { SectionData } from "../types"
import "../style/Welcome.css"

/** rendered as start screen with table of content */
export default function Welcome() {

    /** function to render the table of content */
    function renderWelcomeTocSections(): ReactElement[] {
        return sectionsData.map((sectionData: SectionData, index: number) => (
            <WelcomeTocSection
                key={sectionData.lessonId}
                sectionData={sectionData}
                sectionNumber={index + 1}
            />
        ))
    }

    /** gets image of cover of the first edition of the Critique of Pure Reason depending on screen size */
    function getImage(small: boolean): ReactElement {
        return <img
            className={small ? "book-cover-img small" : "book-cover-img"}
            src="../../assets/images/cpr_image.jpg"
            alt="Deckblatt der ersten Ausgabe der Kritik der reinen Vernunft von 1781"
            title="Deckblatt der ersten Ausgabe der Kritik der reinen Vernunft von 1781"
        />
    }

    return (
        <div className="Welcome">
            <h1>Lies die Kritik der reinen Vernunft!</h1>
            <div className="welcome-text-cont">
                {getImage(false)}
                <p>
                    Studiere Immanuel Kants berühmtestes Werk in deiner eigenen Geschwindigkeit – wann und wo immer du willst.
                    Mit detaillierten Lektürehinweisen und Quizzes, die dich Stück für Stück durch das schwierige Werk begleiten.
                    Zudem hast du Platz für deine eigenen Notizen und du behältst jederzeit deinen Lernfortschritt im Blick.
                </p>
                <p>
                    Der Kurs richtet sich an alle, die sich intensiv mit der <i>Kritik der reinen Vernunft</i> beschäftigen
                    wollen – egal, ob sie Philosophie studieren, aber dieses Werk nicht in der Lehre angeboten wird,
                    oder ob sie immer schon den Traum hatten, sich mit der "Kritik" zu befassen.
                </p>
                <div>
                    {getImage(true)}
                </div>
                <p>
                    Dies ist erst der Anfang. Doch wenn dieses E-Learning-Angebot fertiggestellt ist, dann soll es 18 Kapiteln bestehen,
                    die einer oder mehreren Lektionen bestehen, die jeweils mit einem Quiz abgeschlossen werden.
                    Zudem soll jedes Kapitel durch eine Übersicht mit relevanter Primär- und Sekundärliteratur abgeschlosssen werden.
                    Zu den Kapiteln sollen eine Auflistung von Ressourcen und Hilfmitteln und möglicherweuse weitere Materialien hinzukommen.
                </p>
            </div>
            <h2>Kursinhalt</h2>
            <div>{renderWelcomeTocSections()}</div>
        </div>
    )
}