import Introduction from "../../views/Introduction";
import { SectionProps } from "../../types";

export default function Intro_1({sectionData}: SectionProps) {
    return (
        <Introduction sectionData={sectionData}>
            <p>
                In der Einleitung stellt Kant das Projekt einer „Kritik der reinen Vernunft“ vor, welches dem Buch den Namen gegeben hat.
                Er sieht es als ein Manko an, dass vor ihm Philosophen das Vernunftvermögen angewandt haben, ohne zunächst dessen Möglichkeiten und Grenzen zu bestimmen.
                Das ist für Kant der Grund, warum alle philosophischen Systeme bis dahin scheiterten. Daher will er mit seinem Buch zunächst die Vernunft selbst beurteilen, um dadurch den Grundstein für ein dauerhaftes System der reinen Vernunft zu legen.
            </p>
            <p>
                Das Projekt kreist dabei um die Frage: Wie sind synthetische Urteile a priori möglich?
                Synthetische Urteile sind solche, bei denen, im Unterschied zu analytischen Urteilen, das Prädikat nicht im Subjekt enthalten ist.
                A priori sind Urteile, die unabhängig von der Erfahrung erkannt werden können.
                Kant hält es für ein Versäumnis seiner Vorgänger, die Existenz dieser Urteile – für die er Beispiele in Mathematik und Naturwissenschaft anführt – übersehen zu haben.
                Da auch Metaphysik aus synthetischen Urteilen a priori bestehe, würde durch eine Vernunftkritik die Möglichkeit zur Metaphysik als Wissenschaft eröffnet.
            </p>
        </Introduction>
    )
}