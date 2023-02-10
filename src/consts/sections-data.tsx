import { SectionData } from "../types"

export const sectionsData: SectionData[] = [
    {
        title: "Einleitung",
        path: "/section-1",
        fsPath: "../introductions/Intro-1",
        description: "In der Einleitung beschäftigt sich Kant mit dem Projekt einer Kritik der reinen Vernunft und unterscheidet zwischen analytischen und synthetischen Urteilen sowie zwischen Urteilen a priori und a posteriori.",
        subSections: [
            {
                title: "Einleitung",
                path: "/section-1-1",
                fsPath: "../sections/Section-1-1",
                pageNumbers: "A1/B1-A16/B29"
            }
        ]
    },
    // {
    //     title: "Transzendentale Ästhetik",
    //     path: "/section-1",
    //     description: "Die Transzendentale Ästhetik befasst sich mit der Sinnlichkeit. Sie legt dar, dass Raum und Zeit die Formen der Anschauung sind und diese nur die Formen der Erscheinungen, nicht aber der Dinge an sich sind.",
    //     subSections: [
    //         {
    //             title: "part 2-1",
    //             path: "/path-2-1",
    //         },
    //         {
    //             title: "part 2-2",
    //             path: "/path-2-2",
    //         },
    //         {
    //             title: "part 2-3",
    //             path: "/path-2-3",
    //         },
    //         {
    //             title: "part 2-4",
    //             path: "/path-2-4",
    //         },
    //     ]
    // },
]