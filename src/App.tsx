import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import './style/App.css'
import Account from "./views/Account"
import Welcome from "./views/Welcome"
import Intro_1 from "./components/introductions/Intro-1"
import Section_1_1 from "./components/sections/Section-1-1"

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/account" element={<Account />} />
                <Route path="/section-1" element={<Intro_1 />} />
                <Route path="/section-1-1" element={<Section_1_1 />} />
            </Routes>
        </div>
    )
}

export default App
