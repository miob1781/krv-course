import { sectionsData } from "./consts/sections-data"
import NavBar from './components/ui/NavBar'
import Sidebar from './components/ui/Sidebar'
import RouterContainer from './components/ui/RouterContainer'
import './style/App.css'

export default function App() {
    return (
        <div className="App">
            <NavBar />
            <div className="outer-cont">
                <Sidebar sectionsData={sectionsData} />
                <RouterContainer sectionsData={sectionsData} />
            </div>
        </div>
    )
}