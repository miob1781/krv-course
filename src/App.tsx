import NavBar from './components/NavBar'
import { sectionsData } from "./consts/sections-data"
import './style/App.css'
import ToC from "./components/ToC"
import RouterContainer from './components/RouterContainer'

export default function App() {
    return (
        <div className="App">
            <NavBar />
            <div className="outer-cont">
                <ToC className="sidebar" sectionsData={sectionsData} tocType="sidebar" />
                <RouterContainer sectionsData={sectionsData} />
            </div>
        </div>
    )
}