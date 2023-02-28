import { lazy, ReactElement, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Account from "../../views/Account"
import Welcome from "../../views/Welcome"
import Loading from "./Loading"
import IsPrivate from "./IsPrivate"
import { sectionsData } from "../../consts/sections-data"
import { SectionData, LessonData } from "../../types"

// creates routes of sections for lazy imports

/** array with routes of sections */
const sectionRoutes: ReactElement[] = []

/** gets a specific route */
function getRoute(sectionData: SectionData | LessonData): ReactElement {

    /** lazily imported component */
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

// gets all routes of sections and lessons, depending on the metadata
sectionsData.forEach((sectionData: SectionData) => {
    const route: ReactElement = getRoute(sectionData)
    sectionRoutes.push(route)
    sectionData.lessons!.forEach((lesson: LessonData) => {
        const subRoute: ReactElement = getRoute(lesson)
        sectionRoutes.push(subRoute)
    })
})

/** component in which routes are rendered */
export default function RouterContainer() {
    return (
        // renders routes with loading screen as fallback value
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