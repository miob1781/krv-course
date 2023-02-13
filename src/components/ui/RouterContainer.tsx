import { lazy, ReactElement, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { SectionData } from "../../types"
import Account from "../../views/Account"
import Welcome from "../../views/Welcome"
import Loading from "./Loading"
import Login from "../auth/Login"
import Signup from "../auth/Signup"
import { sectionsData } from "../../consts/sections-data"

// create routes of sections for lazy imports
const sectionRoutes: ReactElement[] = []

function getRoute(sectionData: SectionData): ReactElement {
    const Component = lazy(() => import(sectionData.fsPath))
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

export default function RouterContainer() {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/account" element={<Account />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                {sectionRoutes}
            </Routes>
        </Suspense>
    )
}