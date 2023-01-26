import { lazy, ReactElement, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import { sectionsData } from "./consts/sections-data"
import './style/App.css'
import Account from "./views/Account"
import Welcome from "./views/Welcome"
import { SectionData } from "./types"

const routes: ReactElement[] = []

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
    routes.push(route)
    if (sectionData.subSections) {
        sectionData.subSections.forEach((subSectionData: SectionData) => {
            const route: ReactElement = getRoute(subSectionData)
            routes.push(route)
        })
    }
})

export default function App() {
    return (
        <div className="App">
            <NavBar />
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    <Route path="/" element={<Welcome allSectionData={sectionsData} />} />
                    <Route path="/account" element={<Account />} />
                    {routes}
                </Routes>
            </Suspense>
        </div>
    )
}