import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import './style/App.css'
import Account from "./views/Account"
import Welcome from "./views/Welcome"
import DummyComponent from "./components/sections/DummyComponent"

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/account" element={<Account />} />
                <Route path="/path" element={<DummyComponent />} />
            </Routes>
        </div>
    )
}

export default App
