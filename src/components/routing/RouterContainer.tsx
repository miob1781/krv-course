import { lazy, ReactElement, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Account from "../../views/Account"
import Welcome from "../../views/Welcome"
import Loading from "./Loading"
import IsPrivate from "./IsPrivate"
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
            element={
                <IsPrivate lessonId={sectionData.lessonId}>
                    <Component sectionData={sectionData} />
                </IsPrivate>
            }
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
                <Route path="/account/:lessonId" element={<Account />} />
                {sectionRoutes}
            </Routes>
        </Suspense>
    )
}