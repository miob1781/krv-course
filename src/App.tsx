import NavBar from './components/ui/NavBar'
import Sidebar from './components/ui/Sidebar'
import RouterContainer from './components/routing/RouterContainer'
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
                <Sidebar />
            </div>
            <div className="app-inner-cont">
                <NavBar small />
                <RouterContainer />
            </div>
        </div>
    )
}