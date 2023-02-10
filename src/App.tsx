import { sectionsData } from "./consts/sections-data"
import NavBar from './components/ui/NavBar'
import Sidebar from './components/ui/Sidebar'
import RouterContainer from './components/ui/RouterContainer'
import './style/App.css'

export default function App() {
    return (
        <div className="App">
            <div className="side-cont">
                <NavBar />
                <img
                    className="kant-image"
                    src="../assets/images/Kant-image.jpg"
                    alt="Immanuel Kant"
                    title="Immanuel Kant"
                />
                <Sidebar sectionsData={sectionsData} />
            </div>
            <div className="app-inner-cont">
                <NavBar smallScreen />
                <RouterContainer sectionsData={sectionsData} />
            </div>

        </div>
    )
}