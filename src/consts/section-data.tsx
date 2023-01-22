import { SectionData } from "../types"

export const sectionData: SectionData[] = [
    {
        title: "Einleitung",
        path: "/path",
        component: "/sections/DummyComponent",
        description: "In der Einleitung beschäftigt sich Kant mit dem Projekt einer Kritik der reinen Vernunft und unterscheidet zwischen analytischen und synthetischen Urteilen sowie zwischen Urteilen a priori und a posteriori."
    },
    {
        title: "Transzendentale Ästhetik",
        path: "/path2",
        component: "/sections/DummyComponent",
        description: "Die Transzendentale Ästhetik befasst sich mit der Sinnlichkeit. Sie legt dar, dass Raum und Zeit die Formen der Anschauung sind und diese nur die Formen der Erscheinungen, nicht aber der Dinge an sich sind.",
        subSections: [
            {
                title: "part 2-1",
                path: "/path-2-1",
                component: "/sections/DummyComponent"
            },
            {
                title: "part 2-2",
                path: "/path-2-2",
                component: "/sections/DummyComponent"
            },
            {
                title: "part 2-3",
                path: "/path-2-3",
                component: "/sections/DummyComponent"
            },
            {
                title: "part 2-4",
                path: "/path-2-4",
                component: "/sections/DummyComponent"
            },
        ]
    },
]