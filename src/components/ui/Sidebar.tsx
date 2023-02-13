import ToC from "./ToC"
import "../../style/Sidebar.css"

export default function Sidebar() {
    return (
        <div className="Sidebar">
            <h3>Inhalt</h3>
            <ToC tocType="sidebar" />
        </div>
    )
}