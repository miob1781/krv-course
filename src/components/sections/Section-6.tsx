import { SectionProps } from "../../types";
import Introduction from "../../views/Introduction";

export default function Section_6({ sectionData }: SectionProps) {
    return <Introduction sectionData={sectionData}>
        <p>
            Nachdem Kant im Schematismus-Kapitel die sinnliche Bedingung der transzendentalen Urteilskraft besprochen hat,
            geht er nun dazu über, die Grundsätze des reinen Verstandes,
            welche unter diesen Bedingungen gemäß der Kategorientafel aufgestellt werden können, herzuleiten.
            Dabei stellt Kant einen obersten Grundsatz aller synthetischen Urteile a priori auf,
            den er von dem obersten Grundsatz aller analytischen Urteile unterscheidet.
            Der oberste Grundsatz aller analytischen Urteile ist der Satz des Widerspruchs,
            der zwar bei analytischen Urteilen eine hinreichende Bedingung der Wahrheit ist,
            doch bei synthetischen lediglich eine notwendige.
            Der oberste Grundsatz der synthetischen Urteile a priori hingegen lautet: <i>„ein jeder Gegenstand
                steht unter den notwendigen Bedingungen der synthetischen Einheit des Mannigfaltigen der Anschauung
                in einer möglichen Erfahrung“</i> (A158/B197).
            Dies fasst Kant prägnant zusammen in dem Satz: <i>„die Bedingungen der <b>Möglichkeit der Erfahrung</b> überhaupt
                sind zugleich <b>Bedingungen der Möglichkeit der Gegenstände der Erfahrung</b>“</i> (A158/B197).
            Das Grundsätze-Kapitel baut also auf der Transzendentalen Deduktion der reinen Verstandesbegriffe auf.
        </p>
        <p>
            Die Grundsätze des reinen Verstandes teilen sich gemäß der Kategorientafel in vier Kapitel auf,
            nämlich die <b>Axiome der Anschauung</b>, die <b>Antizipationen der Wahrnehmung</b>,
            die <b>Analogien der Erfahrung</b> und die <b>Postulate des empirischen Denkens überhaupt</b>.
            Die ersten beiden stellen jeweils einen Grundsatz auf, die letzten beiden jeweils drei für jede Kategorie der Klasse.
            Von den Postulaten abgesehen hat Kant bei allen Grundsätzen in der zweiten Auflage dem Haupttext
            einen förmlichen Beweis des Grundsatzes vorangestellt.
        </p>
        <p>
            In diesem Kapitel werden die Grundsätze der Axiome der Anschauung und der Antizipationen der Wahrnehmung behandelt.
            Der Grundsatz der Axiome der Anschauung besagt, dass alle Anschauungen <b>extensive Größen</b> sind. Das sind Größen,
            bei denen die Teile das Ganze möglich machen, was auf Raum und Zeit zutrifft.
            Der Grundsatz der Antizipationen der Wahrnehmung hingegen besagt, dass das Reale der Erscheinungen <b>intensive Größe</b> hat.
            Intensive Größe sind Größen, die anders als extensive Größen nicht aus Teilen bestehen
            und deren Vielheit nur augenblicklich aufgefasst werden kann.
        </p>
    </Introduction>
}