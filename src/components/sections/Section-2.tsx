import Introduction from "../../views/Introduction";
import { SectionProps } from "../../types";

export default function Section_2({ sectionData }: SectionProps) {
    return (
        <Introduction sectionData={sectionData}>
            <p>
                Am Ende der Einleitung in die <i>Kritik der reinen Vernunft</i> schreibt Kant:
            </p>
            <blockquote>
                Nur so viel scheint zur Einleitung, oder Vorerinnerung nötig zu sein, dass es zwei Stämme der menschlichen Erkenntnis gebe,
                die vielleicht aus einer gemeinschaftlichen, uns unbekannten Wurzel entspringen, nämlich Sinnlichkeit und Verstand,
                durch deren ersteren uns Gegenstände <b>gegeben</b>, durch den zweiten aber <b>gedacht</b> werden. (A15/B29)
            </blockquote>
            <p>
                Während unklar bleiben muss, was Kant mit der „gemeinschaftlichen, und unbekannten Wurzel“ gemeint haben könnte,
                ist umso klarer (und wichtiger!), was es bedeutet, dass Sinnlichkeit und Verstand zwei verschiedene Stämme der Erkenntnis seien.
                Denn Sinnlichkeit ist das Vermögen, wodurch uns Gegenstände gegeben und wir gleichsam einen Kontakt zur Welt (und uns selbst) haben. Durch den Verstand aber können wir erst ein Verständnis davon entwickeln, was uns durch die Sinnlichkeit offenbart wird. Daher haben beide Erkenntnisvermögen verschiedene Aufgaben und sind zueinander komplementär.
                Um es mit Kants eigenen Worten zu sagen:
            </p>
            <blockquote>
                Gedanken ohne Inhalt sind leer, Anschauungen ohne Begriffe sind blind. …
                Nur daraus, dass sie sich vereinigen, kann Erkenntnis entspringen. (A51/B75f.)
            </blockquote>
            <p>
                Die Sinnlichkeit bespricht Kant in der Transzendentalen Ästhetik (wobei sich der Ausdruck „Ästhetik“ nicht auf Kunst oder das Schöne bezieht,
                sondern dem griechischen Wort für Wahrnehmung entspringt).
                Es gibt zwei Arten von Gegenständen, die auf grundlegend verschiedene Weisen angeschaut werden.
                Von uns verschiedene Gegenstände werden durch den äußeren Sinn angeschaut,
                wohingegen die eigene Seele durch den inneren Sinn angeschaut wird.
            </p>
            <p>
                <b>Anschauung</b> ist die Vorstellung, wodurch uns Gegenstände gegeben werden.
                Das geschieht bei uns Menschen (und allen Tieren) durch Sinnlichkeit.
                Wie wohl alles bei Kant hat Anschauung eine <b>Materie</b> und eine <b>Form</b>.
                Die Materie besteht aus <b>Empfindungen</b>: die rote Farbe, der Geruch der Rose, der stechende Druck der Dornen.
                Es sind die Sinneseindrücke, die durch die Sinne gegeben werden.
                Die Form hingegen ist das, worin die Empfindungen geordnet werden.
                Die Form des äußeren Sinns ist der <b>Raum</b>, die Form des inneren Sinns ist die <b>Zeit</b>.
                Zwar sind auch äußere Gegenstände in der Zeit, aber nur dadurch,
                dass die Vorstellungen von äußeren Gegenständen im inneren Sinn angeschaut werden.
            </p>
            <p>
                Kant möchte in der Transzendentalen Ästhetik vor allem für zwei Thesen argumentieren:
            </p>
            <ol>
                <li>Raum und Zeit sind nicht Eigenschaften der <b>Dinge an sich</b>.</li>
                <li>Raum und Zeit sind stattdessen Formen der (äußeren oder inneren) <b>Erscheinungen</b>.</li>
            </ol>
            <p>
                Dies schließt er aus folgenden Sätzen, für die er – in sehr knapper Form – nacheinander auf den Raum und die Zeit bezogen argumentiert:
            </p>
            <ol>
                <li>Raum und Zeit sind keine empirischen Vorstellungen.</li>
                <li>Raum und Zeit sind Vorstellungen a priori.</li>
                <li>Raum und Zeit sind keine Begriffe.</li>
                <li>Raum und Zeit sind reine Anschauungen.</li>
                <li>Nur dadurch, dass Raum und Zeit reine Anschauungen a priori sind, sind Wissenschaften wie zum Beispiel Geometrie möglich.</li>
            </ol>
            <p>
                Wir werden uns in einer anderen Lektion ausführlich mit Erscheinungen und Dingen an sich beschäftigen.
                Hier genügt es, dass Erscheinungen die Gegenstände sind, die uns manifest in der Erkenntnis gegeben sind,
                und Dinge an sich die Gegenstände, die unabhängig von uns existieren.
            </p>
        </Introduction>
    )
}