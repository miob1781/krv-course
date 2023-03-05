import { SectionProps } from "../../types";
import Introduction from "../../views/Introduction";

export default function Section_3({ sectionData }: SectionProps) {
    return (
        <Introduction sectionData={sectionData}>
            <p>
                Nachdem Kant in der Transzendentalen Ästhetik den ersten Stamm der menschlichen Erkenntnis abgehandelt hat (die Sinnlichkeit),
                geht er nun, in der Transzendentalen Logik, zum zweiten Stamm über: dem Verstand. Dieser Teil ist ungleich länger:
                Die Transzendentale Logik macht etwa drei Viertel der gesamten <i>Kritik der reinen Vernunft</i> aus.
            </p>
            <p>
                In der Einleitung zu diesem Teil erläutert Kant das besondere an der <b>transzendentalen Logik</b>.
                Man darf Logik in Kants Sinn nicht mit dem verwechseln, was man heute als „formale Logik“
                im ersten Semester eines Philosophiestudiums lernt.
                Zu Kants Zeit war Logik ganz allgemein die Lehre vom (richtigen) Denken.
                Der formalen Logik in unserem Sinn noch am nächsten ist die <b>allgemeine Logik</b>.
                Doch die transzendentale Logik gehört zu den <b>besonderen Logiken</b>,
                in denen die richtige Art des Denkens in einem bestimmten Gegenstandsbereich abgehandelt wird.
                Der Gegenstand der transzendentalen Logik sind nicht die Regeln des Denkens überhaupt (wie bei der allgemeinen Logik),
                sondern der Ursprung, der Umfang und die Bedingungen der Möglichkeit des Denkens a priori.
                Zum Denken a priori gehören insbesondere die <b>reinen Verstandesbegriffe</b>, welche – sofern sie Stammbegriffe
                sind – <b>Kategorien</b>, sonst aber <b>Prädikabilien</b> heißen.
            </p>
            <p>
                Doch was sind die Kategorien und wie lassen sie sich bestimmen?
                Kant glaubt, dass es dazu eines „Leitfadens“ bedarf, und dieser ist das Verstandesvermögen.
                Anders als Anschauungen, die nur einzelne Gegenstände zum Inhalt haben,
                bezieht sich eine Vorstellung des Verstandes auf beliebig viele Gegenstände.
                So bezieht sich der Begriff „rot“ auf alle roten Gegenstände,
                während Anschauungen nur einen jeweiligen roten Gegenstand zum Inhalt haben.
                Ein Urteil ist eine Verbindung von Begriffen (oder auch Urteilen) und die verschiedenen Arten der Verbindungen
                nennt Kant eine <b>Funktion</b>.
                Da die Funktionen die Formen des Urteils sind (im Unterschied zu Begriffen oder Urteilen, die die Materie ausmachen),
                werden sie auch als „Urteilsformen“ bezeichnet.
            </p>
            <p>
                Die Funktionen der Urteile stellt Kant in der sogenannten „Urteilstafel“ vor,
                in welcher er unter vier „Titel“ je drei „Momente“ bringt.
                Zum Titel der <b>Quantität</b> gehören die <b>allgemeinen</b>, <b>besonderen</b> und <b>einzelnen</b> Urteile,
                zum Titel der <b>Qualität</b> die <b>bejahenden</b>, <b>verneinenden</b> und <b>unendlichen</b>,
                zum Titel der <b>Relation</b> die <b>kategorischen</b>, <b>hypothetischen</b> und <b>disjunktiven</b>
                und zum Titel der <b>Modalität</b> die <b>problematischen</b>, <b>assertorischen</b> und <b>apodiktischen</b>.
                Daraus wird die sogenannte „Kategorientafel“ abgeleitet, bei welcher einer Urteilsform je eine Kategorie zugeordnet wird.
                Kategorien sind metaphysische Begriffe von Gegenständen
                und die Kategorien der Quantität sind <b>Einheit</b>, <b>Vielheit</b> und <b>Allheit</b>,
                der Qualität sind <b>Realität</b>, <b>Negation</b> und <b>Limitation</b>,
                der Relation sind <b>Inhärenz-Subsistenz</b>, <b>Kausalität-Dependenz</b> und <b>Gemeinschaft</b> und
                der Modalität sind <b>Möglichkeit-Unmöglichkeit</b>, <b>Dasein-Nichtsein</b> und <b>Notwendigkeit-Zufälligkeit</b>.
            </p>
            <p>
                Um zu verstehen, wie die Kategorien aus den Urteilsformen abgeleitet werden,
                müssen wir zunächst den Begriff der <b>Synthesis</b> betrachten.
                Synthesis ist notwendig, um eine synthetische Erkenntnis zu bewirken,
                und die reine Synthesis ist nötig für eine synthetische Erkenntnis a priori.
                Durch Synthesis fasst die <b>Einbildungskraft</b> das Mannigfaltige
                in einer – empirischen oder reinen – Anschauung zusammen,
                sodass der Verstand die Einheit einer Erkenntnis herstellen kann.
                Die verschiedenen Arten der Synthesis entsprechen laut Kant den Funktionen in Urteilen,
                sodass die Handlung einer Synthesis analog zu einer Urteilsform zu verstehen ist.
                Zum Beispiel sind die kategorischen Urteile,
                bei welchem ein logisches Prädikat einem logischen Subjekt zugeschrieben wird,
                analog zur Kategorie von Substanz und Akzidens (Subsistenz-Inhärenz),
                bei welcher ein reales Prädikat (Akzidens) einem realen Subjekt (Substanz) zugeordnet wird.
            </p>
        </Introduction>
    )
}