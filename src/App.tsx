import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import Account from "./views/Account"
import Welcome from "./views/Welcome"
import './style/App.css'

function App() {
    const Intro_1 = lazy(() => import("./components/introductions/Intro-1"))
    const Section_1_1 = lazy(() => import("./components/sections/Section-1-1"))

    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/account" element={<Account />} />
                <Route path="/section-1" element={<Suspense fallback={<div>Loading...</div>}><Intro_1 /></Suspense>} />
                <Route path="/section-1-1" element={<Suspense fallback={<div>Loading...</div>}><Section_1_1 /></Suspense>} />
            </Routes>
        </div>
    )
}

export default App
