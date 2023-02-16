import axios from "axios"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth.context"
import { AuthContextTypes } from "../types"

export default function Account() {
    const { isLoggedIn, username, storeToken, authenticateUser, logOutUser } = useContext(AuthContext) as AuthContextTypes

    const [usernameSignup, setUsernameSignup] = useState("")
    const [passwordSignup, setPasswordSignup] = useState("")
    const [usernameLogin, setUsernameLogin] = useState("")
    const [passwordLogin, setPasswordLogin] = useState("")
    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    function registerUser(type: string) {
        const userData = {
            username: type === "signup" ? usernameSignup : usernameLogin,
            password: type === "signup" ? passwordSignup : passwordLogin
        }
        axios.post(
            `${import.meta.env.VITE_BASE_URL}/auth/${type === "signup" ? "signup" : "login"}`, userData)
            .then(response => {
                storeToken(response.data.authToken)
                authenticateUser()
                setSuccess(true)
                setUsernameSignup("")
                setPasswordSignup("")
                setUsernameLogin("")
                setPasswordLogin("")
                setErrorMessage("")
            })
            .catch(err => {
                setErrorMessage(err)
            })
    }

    const loggedInText = (
        <div>
            <h2>Hi {username}!</h2>
            <p>Du bist als {username} angemeldet. Wenn du das nicht bist, dann kannst du dich hier abmelden:</p>
            <button type="button" onClick={logOutUser}>Abmelden</button>
        </div>
    )

    const loggedOutText = (
        <div>
            <h2>Herzlich willkommen!</h2>
            <p>
                Du bist derzeit nicht eingeloggt. Um die vollen Funktionen nutzen zu können, musst du dich kurz registrieren.
                Deine Daten werden nur für die Verwendung dieses E-Learning-Angebots verwendet und nicht an Dritte weitergegeben.
            </p>
            <form>
                <div>
                    <label htmlFor="signup-username">Benutzername</label>
                    <input type="text" name="" id="signup-username" onChange={e => setUsernameSignup(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="signup-password">Passwort</label>
                    <input type="password" name="" id="signup-password" autoComplete="new-password" onChange={e => setPasswordSignup(e.target.value)} />
                </div>
                <button type="button" onClick={() => registerUser("signup")}>Registieren</button>
            </form>
            <form>
                <div>
                    <label htmlFor="login-username">Benutzername</label>
                    <input type="text" name="" id="login-username" onChange={e => setUsernameLogin(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="login-password">Passwort</label>
                    <input type="password" name="" id="login-password" autoComplete="current-password" onChange={e => setPasswordLogin(e.target.value)} />
                </div>
                <button type="button" onClick={() => registerUser("login")}>Anmelden</button>
            </form>
            <p>{errorMessage}</p>
        </div>
    )

    const successText = (
        <div>
            <p>Du bist jetzt erfolgreich eingeloggt.</p>
            <Link to="/"><button>Zur Startseite</button></Link>
        </div>
    )

    return success ? successText : (isLoggedIn ? loggedInText : loggedOutText)
}