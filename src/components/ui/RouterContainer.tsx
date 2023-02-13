import { lazy, ReactElement, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { SectionData } from "../../types"
import { sectionsData } from "../../consts/sections-data"
import Account from "../../views/Account"
import Welcome from "../../views/Welcome"
import Loading from "./Loading"
import Login from "../auth/Login"
import Signup from "../auth/Signup"
// import Intro_1 from "../introductions/Intro-1"
// import Section_1_1 from "../sections/Section-1-1"

// create routes of sections for lazy imports
const sectionRoutes: ReactElement[] = []

function getRoute(sectionData: SectionData): ReactElement {
    const Component = lazy(() => import(`../sections/Section-${sectionData.importNumber}.jsx`))
    return (
        <Route
            key={sectionData.path}
            path={sectionData.path}
            element={<Component sectionData={sectionData} />}
        />
    )
}

sectionsData.forEach((sectionData: SectionData) => {
    const route: ReactElement = getRoute(sectionData)
    sectionRoutes.push(route)
    sectionData.subSections!.forEach((subSectionData: SectionData) => {
        const subRoute: ReactElement = getRoute(subSectionData)
        sectionRoutes.push(subRoute)
    })
})

// const INTRO_1 = lazy(() => import("../introductions/Intro-1.jsx"))
// const SECTION_1_1 = lazy(() => import("../sections/Section-1-1.jsx"))

export default function RouterContainer() {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/account" element={<Account />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                {/* <Route path="/section-1" element={<INTRO_1 sectionData={sectionsData[0]} />} />
                <Route path="/section-1-1" element={<SECTION_1_1 sectionData={sectionsData[0].subSections![0]} />} /> */}
                {sectionRoutes}
            </Routes>
        </Suspense>
    )
}