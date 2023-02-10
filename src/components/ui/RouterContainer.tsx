import { lazy, ReactElement, Suspense, useState } from "react"
import { Routes, Route } from "react-router-dom"
import { SectionData } from "../../types"
import Account from "../../views/Account"
import Welcome from "../../views/Welcome"
import Loading from "./Loading"
import Login from "../auth/Login"
import Signup from "../auth/Signup"

interface Props {
    sectionsData: SectionData[]
}

export default function RouterContainer({ sectionsData }: Props) {
    const [sectionRoutes, setSectionRoutes] = useState<ReactElement[] | null>(null)

    function getSectionRoutes() {
        const sectionRoutesArray: ReactElement[] = []

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
            sectionRoutesArray.push(route)
            sectionData.subSections!.forEach((subSectionData: SectionData) => {
                const subRoute: ReactElement = getRoute(subSectionData)
                sectionRoutesArray.push(subRoute)
            })
        })

        setSectionRoutes(sectionRoutesArray)
    }

    sectionRoutes || getSectionRoutes()

    return (
        // TO DO: create loading screen with Kant making mustard picture and synthesis joke
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<Welcome sectionsData={sectionsData} />} />
                <Route path="/account" element={<Account />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                {sectionRoutes}
            </Routes>
        </Suspense>

    )
}