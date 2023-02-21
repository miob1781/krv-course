import axios from "axios"
import { useContext, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { AuthContext } from "../context/auth.context"
import { AuthContextTypes } from "../types"
import "../style/Account.css"

type TextDisplayed = "" | "edit" | "login-success" | "signup-success" | "logout-success" | "edit-success" | "delete-success"

export default function Account() {
    const { isLoggedIn, userId, username, storeToken, authenticateUser, logOutUser } = useContext(AuthContext) as AuthContextTypes
    const { lessonId } = useParams()

    const [usernameSignup, setUsernameSignup] = useState("")
    const [passwordSignup, setPasswordSignup] = useState("")
    const [usernameLogin, setUsernameLogin] = useState("")
    const [passwordLogin, setPasswordLogin] = useState("")
    const [usernameEdit, setUsernameEdit] = useState("")
    const [passwordEdit, setPasswordEdit] = useState("")
    const [signup, setSignup] = useState(false)
    const [deleteAccount, setDeleteAccount] = useState(false)
    const [textDisplayed, setTextDisplayed] = useState<TextDisplayed>("")
    const [errorMessage, setErrorMessage] = useState("")

    function resetFields() {
        setUsernameSignup("")
        setPasswordSignup("")
        setUsernameLogin("")
        setPasswordLogin("")
        setUsernameEdit("")
        setPasswordEdit("")
        setErrorMessage("")
    }

    function registerUser(type: string) {
        const userData = {
            username: type === "signup" ? usernameSignup : usernameLogin,
            password: type === "signup" ? passwordSignup : passwordLogin
        }
        axios.post(
            `${import.meta.env.VITE_BASE_URL}/auth/${type === "signup" ? "signup" : "login"}`,
            userData
        ).then(response => {
            storeToken(response.data.authToken)
            authenticateUser()
            resetFields()
            setTextDisplayed(type === "signup" ? "signup-success" : "login-success")
        }).catch(err => {
            setErrorMessage(err.message)
        })
    }

    function editUser() {
        const userData = {
            userId,
            username: usernameEdit,
            password: passwordEdit
        }
        axios.put(
            `${import.meta.env.VITE_BASE_URL}/auth/`,
            userData,
            { headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` } }
        ).then(response => {
            storeToken(response.data.authToken)
            authenticateUser()
            setTextDisplayed("edit-success")
            resetFields()
        }).catch(err => {
            setErrorMessage(err.message)
        })
    }

    function deleteUser() {
        axios.delete(
            `${import.meta.env.VITE_BASE_URL}/auth/${userId}`,
            { headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` } }
        ).then(() => {
            logOutUser()
            setTextDisplayed("delete-success")
            resetFields()
        }).catch(err => {
            setErrorMessage(err.message)
        })
    }

    function handleLogOut() {
        logOutUser()
        setTextDisplayed("logout-success")
    }

    function getText() {
        if (textDisplayed === "login-success") return loginSuccessText
        else if (textDisplayed === "signup-success") return signupSuccessText
        else if (textDisplayed === "edit-success") return editSuccessText
        else if (textDisplayed === "logout-success") return logOutSuccessText
        else if (textDisplayed === "edit") return editForm
        else if (isLoggedIn) return loggedInText
        else return loggedOutText
    }

    const loggedOutText = (
        <div>
            <h2>Herzlich willkommen!</h2>
            <p>
                Du bist derzeit nicht eingeloggt. Um die vollen Funktionen nutzen zu können, musst du dich kurz registrieren.
                Deine Daten werden nur für die Verwendung dieses E-Learning-Angebots verwendet und nicht an Dritte weitergegeben.
            </p>
            <form>
                <div className="form-grid">
                    <label htmlFor="login-username">Benutzername:</label>
                    <input type="text" name="" id="login-username" onChange={e => setUsernameLogin(e.target.value)} />
                    <label htmlFor="login-password">Passwort:</label>
                    <input type="password" name="" id="login-password" autoComplete="current-password" onChange={e => setPasswordLogin(e.target.value)} />
                </div>
                <div className="button-cont">
                    <button type="button" onClick={() => registerUser("login")}>Anmelden</button>
                </div>
            </form>
            <p>Du bist noch nicht registriert?</p>
            <div className="button-cont">
                <button type="button" onClick={() => setSignup(true)}>Jetzt registrieren!</button>
            </div>

            {/* form is opened if user clicks button to open signup form */}
            <form style={{ display: signup ? "block" : "none" }}>
                <div className="form-grid">
                    <label htmlFor="signup-username">Benutzername:</label>
                    <input type="text" name="" id="signup-username" onChange={e => setUsernameSignup(e.target.value)} />
                    <label htmlFor="signup-password">Passwort:</label>
                    <input type="password" name="" id="signup-password" autoComplete="new-password" onChange={e => setPasswordSignup(e.target.value)} />
                </div>
                <div className="button-cont">
                    <button type="button" onClick={() => registerUser("signup")}>Registieren</button>
                </div>
            </form>
            <p>{errorMessage}</p>
        </div>
    )

    const loggedInText = (
        <div>
            <h2>Hi {username}!</h2>
            <p>Du bist als {username} angemeldet. Wenn du das nicht bist, dann kannst du dich hier abmelden:</p>
            <div className="button-cont">
                <button type="button" onClick={handleLogOut}>Abmelden</button>
            </div>
            <p>Möchtest du deine Daten bearbeiten oder deinen Account löschen?</p>
            <div className="button-cont">
                <button type="button" onClick={() => setTextDisplayed("edit")}>Account bearbeiten</button>
                <button type="button" onClick={() => setDeleteAccount(true)}>Account löschen</button>
            </div>
            <div style={{ display: deleteAccount ? "block" : "none" }}>
                <p>Möchtest du deinen Account wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.</p>
                <div className="button-cont">
                    <button className="delete" type="button" onClick={deleteUser}>Ja, Account löschen</button>
                </div>
            </div>
        </div>
    )

    const editForm = (
        <div>
            <h3>Account bearbeiten</h3>
            <form>
                <div className="form-grid">
                    <label htmlFor="edit-username">Benutzername:</label>
                    <input type="text" name="" id="edit-username" defaultValue={username} onChange={e => setUsernameEdit(e.target.value)} />
                    <label htmlFor="edit-password">Passwort:</label>
                    <input type="password" name="" id="edit-password" autoComplete="current-password" onChange={e => setPasswordEdit(e.target.value)} />
                </div>
                <div className="button-cont">
                    <button type="button" onClick={editUser}>Bearbeiten</button>
                    <button type="button" onClick={() => setTextDisplayed("")}>Zurück</button>
                </div>
            </form>
            <p>{errorMessage}</p>
        </div>
    )

    const signupSuccessText = (
        <div>
            <p>Du hast dich erfolgreich registriert.</p>
            <div className="button-cont">
                <Link to={`/${lessonId && "section-" + lessonId}`}>
                    <button>{lessonId ? "Zur Lektion" : "Zur Startseite"}</button>
                </Link>
            </div>
        </div>
    )

    const loginSuccessText = (
        <div>
            <p>Du hast dich erfolgreich eingeloggt.</p>
            <div className="button-cont">
            <Link to={`/${lessonId && "section-" + lessonId}`}>
                    <button>{lessonId ? "Zur Lektion" : "Zur Startseite"}</button>
                </Link>
            </div>
        </div>
    )

    const editSuccessText = (
        <div>
            <p>Du hast deine Daten erfolgreich geändert.</p>
            <div className="button-cont">
                <Link to="/"><button>Zur Startseite</button></Link>
            </div>
        </div>
    )

    const logOutSuccessText = (
        <div>
            <p>Du hast dich ausgeloggt.</p>
            <div className="button-cont">
                <Link to="/"><button>Zur Startseite</button></Link>
            </div>
        </div>
    )

    return (
        <div className="Account">
            {getText()}
        </div>
    )
}