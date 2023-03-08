import { SectionProps } from "../../types";
import Introduction from "../../views/Introduction";

export default function Section_4({sectionData}: SectionProps) {
    return <Introduction sectionData={sectionData}>
        <p>
            Die Transzendentale Deduktion der reinen Verstandesbegriffe wird oft
            als der schwierigste Teil der <i>Kritik der reinen Vernunft</i> betrachtet.
            Sie schließt an die <b>metaphysische Deduktion</b> der Kategorien an,
            in welcher Kant die Kategorientafel aus der Urteilstafel hergeleitet hat.
            Hier untersucht Kant, ob wir denn auch berechtigt sind, die Kategorien – die wir bisher nur aus der Natur des Verstandes
            abgeleitet haben – auf Gegenstände anzuwenden.
        </p>
        <p>
            Kant hat die Transzendentale Deduktion in der zweiten Auflage neu bearbeitet,
            nur die Einleitung ist größtenteils gleichgeblieben.
            Wir werden in dieser Lektion nur die zweite Auflage besprechen, da sie – auch nach Kants eigener Einschätzung – über
            eine bessere Darstellung verfügt.
            Doch es wird allgemein erwartet, beide Auflagen zu lesen; und manche Interpreten bevorzugen sogar die erste Auflage.
        </p>
        <p>
            In der Einleitung erläutert Kant, worin das Projekt einer <b>transzendentalen Deduktion</b> besteht
            und warum sie für Kategorien unerlässlich ist.
            Das Ziel einer transzendentalen Deduktion ist, a priori zu zeigen,
            dass Begriffe einen möglichen Gegenstand, also <b>objektive Realität</b> haben.
            Bei Kategorien ist keine <b>empirische Deduktion</b> möglich, was bedeuten würde, dass wir sie aus der Erfahrung ableiten.
            Kants Beweisidee für die transzendentale Deduktion der Kategorien ist folgende:
            So wie die Formen der Anschauung, Raum und Zeit, Anschauung erst möglich machen, machen die Kategorien,
            als Formen der gedachten Objekte der Erfahrung, die Gegenstände der Erfahrung erst möglich.
            Da es Erfahrung gibt, folgt daraus die objektive Realität der Kategorien, was die transzendentale Deduktion abschließt.
        </p>
        <p>
            Doch im Detail ist dieser Beweis sehr kompliziert. Der Schlüsselbegriff ist <b>Verbindung</b> bzw.
            (gleichbedeutend) <b>Synthesis</b>.
            Wie schon im letzten Kapitel besprochen, bewirkt eine Synthesis eine Einheit in der Vorstellung verschiedener Objekte,
            z.B. durch ein Urteil. Doch dieser Einheit korrespondiert auch eine subjektive Seite.
            Denn laut Kants berühmten Satz muss das „Ich denke“ „alle meine Vorstellungen begleiten können“ (B131).
            Das heißt schlicht, dass wir von unseren Vorstellungen ein Bewusstsein haben können müssen.
            Ein Bewusstsein von unseren eigenen Vorstellungen heißt <b>Selbstbewusstsein</b> oder, wie Kant es auch nennt, <b>Apperzeption</b>.
        </p>
        <p>
            Alles Mannigfaltige der Anschauung (denn auch diese ist eine Vorstellung) muss demnach unter die
            „synthetische Einheit der Apperzeption“ gebracht werden können.
            Dies bedeutet für Kant, dass wir eine Erkenntnis bilden, die das Mannigfaltige der Anschauung
            „in einem Begriff vom Objekt vereinigt“ (B139).
            Da wir dazu ein Urteil bilden, unterliegt die synthetische Einheit der Apperzeption den Urteilsfunktionen.
            Doch da dies dieselben Funktionen sind, die unter dem Namen der Kategorien die verschiedenen Funktionen der Synthesis ausdrücken,
            folgt für Kant, dass das Mannigfaltige der Anschauung unter der Einheit der Kategorien steht.
            Die synthetische Einheit der Apperzeption, unter der das Mannigfaltige der Anschauung steht, ist also nur durch Kategorien möglich.
        </p>
        <p>
            Man könnte meinen, dass die transzendentale Deduktion der Kategorien damit abgeschlossen wäre. Doch weit gefehlt.
            Denn bisher ist nur gezeigt worden, dass die Kategorien eine notwendige Bedingung der Einheit der Apperzeption sind.
            Es ist jedoch noch nicht gezeigt worden, dass unsere Anschauungen auch dazu geeignet sind,
            unter die synthetische Einheit der Apperzeption gebracht zu werden.
            Das versucht Kant im zweiten Teil der Deduktion nachzuweisen.
        </p>
        <p>
            Entscheidend ist dabei die <b>Einbildungskraft</b> als Bindeglied zwischen Sinnlichkeit und Verstand.
            Denn die (produktive, nicht reproduktive) Einbildungskraft ist eine Wirkung des Verstands auf die Sinnlichkeit.
            Der Verstand affiziert den inneren Sinn und bewirkt dadurch, dass wir uns bestimmter Vorstellungen in uns bewusst werden.
            Das Bewusstsein von einer Anschauung nennt Kant <b>Wahrnehmung</b>,
            welche durch eine Synthesis der <b>Apprehension</b> erzeugt wird.
            Dabei wird eine andere Art von Einheit zustande gebracht als die objektive Einheit in Form eines Urteils
            (die von den zufälligen Gegebenheiten der Anschauung abstrahiert), nämlich eine subjektive Einheit,
            die auf die konkreten Anschauungen bezogen ist.
            Ebenso wie die Synthesis eines Urteils unterliegt die Synthesis der Einbildungskraft den Urteilsfunktionen.
            Doch da die Anschauungen im inneren Sinn durch die Synthesis der Einbildungskraft gegeben werden,
            müssen die Anschauungen gemäß den Funktionen der Kategorien gegeben werden können,
            sofern wir Vorstellungen im inneren Sinn haben.
        </p>
        <p>
            Jetzt erst ist die transzendentale Deduktion der Kategorien vollendet.
            Doch Kant betont, dass sie nur für Erscheinungen, nicht Dinge an sich, gilt.
            Ob es auch Gegenstände außerhalb der Reichweite unserer Sinne gibt, die den Kategorien entsprechen,
            müssen wir unbeantwortet lassen.
            Denn zur Erkenntnis gehören Anschauung und Begriff; und Dinge an sich können wir zwar denken, aber nicht anschauen.
            Wir haben noch nicht mal eine Erkenntnis von unserem eigenen Denken, da wir zwar die Gedanken,
            aber nicht das Denken selbst anschauen können.
            Daher erkennen wir sogar uns selbst nur, wie wir uns im inneren Sinn erscheinen, und nicht, wie wir sind.
        </p>
    </Introduction>
}