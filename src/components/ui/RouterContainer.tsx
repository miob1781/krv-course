import { lazy, ReactElement, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Account from "../../views/Account"
import Welcome from "../../views/Welcome"
import Loading from "./Loading"
import { sectionsData } from "../../consts/sections-data"
import { SectionData, SubSectionData } from "../../types"

// create routes of sections for lazy imports
const sectionRoutes: ReactElement[] = []

function getRoute(sectionData: SectionData | SubSectionData): ReactElement {
    const Component = lazy(() => import(`../sections/Section-${sectionData.lessonId}.tsx`))
    return (
        <Route
            key={sectionData.lessonId}
            path={`section-${sectionData.lessonId}`}
            element={<Component sectionData={sectionData} />}
        />
    )
}

sectionsData.forEach((sectionData: SectionData) => {
    const route: ReactElement = getRoute(sectionData)
    sectionRoutes.push(route)
    sectionData.subSections!.forEach((subSectionData: SubSectionData) => {
        const subRoute: ReactElement = getRoute(subSectionData)
        sectionRoutes.push(subRoute)
    })
})

export default function RouterContainer() {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/account" element={<Account />} />
                {sectionRoutes}
            </Routes>
        </Suspense>
    )
}