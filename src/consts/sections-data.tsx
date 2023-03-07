import { SectionData } from "../types"

/** metadata of sections */
export const sectionsData: SectionData[] = [
    {
        title: "Einleitung",
        lessonId: "1",
        description: "In der Einleitung beschäftigt sich Kant mit dem Projekt einer Kritik der reinen Vernunft und unterscheidet zwischen analytischen und synthetischen Urteilen sowie zwischen Urteilen a priori und a posteriori.",
        lessons: [
            {
                title: "Einleitung",
                lessonId: "1-1",
                pageNumbers: "A1/B1–A16/B29"
            }
        ]
    },
    {
        title: "Transzendentale Ästhetik",
        lessonId: "2",
        description: "Die Transzendentale Ästhetik befasst sich mit der Sinnlichkeit. Sie legt dar, dass Raum und Zeit die Formen der Anschauung sind und diese nur die Formen der Erscheinungen, nicht aber der Dinge an sich sind.",
        lessons: [
            {
                title: "Transzendentale Ästhetik, § 1",
                lessonId: "2-1",
                pageNumbers: "A19/B33–A22/B36"
            },
            {
                title: "Transzendentale Ästhetik, §§ 2–3",
                lessonId: "2-2",
                pageNumbers: "A22/B37–A30/B45"
            },
            {
                title: "Transzendentale Ästhetik, §§ 4–8",
                lessonId: "2-3",
                pageNumbers: "A30/B46–A49/B66, B66–69, B71–73"
            }
        ]
    },
    {
        title: "Urteilsformen und Kategorien",
        lessonId: "3",
        description: "Die Transzendentale Logik befasst dich mit dem Denkvermögen und nimmt den weitaus größten Teil des Werks ein. In diesem Kapitel werden die Einleitung zur Transzendentalen Logik, die Urteilsformen und die Kategorien behandelt.",
        lessons: [
            {
                title: "Transzendentale Logik, Einleitung",
                lessonId: "3-1",
                pageNumbers: "A50/B74–A64/B88"
            },
            {
                title: "Urteilsformen",
                lessonId: "3-2",
                pageNumbers: "A64/B89–A76/B101"
            },
            {
                title: "Kategorien",
                lessonId: "3-3",
                pageNumbers: "A76/B102–B113, optional: B113–116"
            },
        ]
    }
]