import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import './style/App.css'
import Account from "./views/Account"
import Welcome from "./views/Welcome"
import Section_1 from "./components/sections/Section-1"

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/account" element={<Account />} />
                <Route path="/section-1" element={<Section_1 />} />
            </Routes>
        </div>
    )
}

export default App
