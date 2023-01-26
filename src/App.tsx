import { lazy, ReactElement, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import { sectionsData } from "./consts/sections-data"
import './style/App.css'
import Account from "./views/Account"
import Welcome from "./views/Welcome"
import { SectionData } from "./types"

// create the array of section routes outside of the App component
const sectionRoutes: ReactElement[] = []

function getRoute(sectionData: SectionData): ReactElement {
    const Component = lazy(() => import(/* @vite-ignore */ sectionData.fsPath))
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

export default function App() {
    return (
        <div className="App">
            <NavBar />
            {/* TO DO: create loading screen with Kant making mustard picture and synthesis joke */}
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    <Route path="/" element={<Welcome sectionsData={sectionsData} />} />
                    <Route path="/account" element={<Account />} />
                    {sectionRoutes}
                </Routes>
            </Suspense>
        </div>
    )
}