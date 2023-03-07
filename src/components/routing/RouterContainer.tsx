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
function getRoute(data: SectionData | LessonData, isLesson: boolean): ReactElement {

    /** lazily imported component */
    const Component = lazy(() => import(`../sections/Section-${data.lessonId}.tsx`))

    return (
        <Route
            key={data.lessonId}
            path={`section-${data.lessonId}`}
            element={
                <IsPrivate lessonId={data.lessonId}>
                    {isLesson ? <Component lessonData={data} /> : <Component sectionData={data} />}
                </IsPrivate>
            }
        />
    )
}

// gets all routes of sections and lessons, depending on the metadata
sectionsData.forEach((sectionData: SectionData) => {
    const route: ReactElement = getRoute(sectionData, false)
    sectionRoutes.push(route)
    sectionData.lessons.forEach((lesson: LessonData) => {
        const subRoute: ReactElement = getRoute(lesson, true)
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