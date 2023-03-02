import axios from "axios"
import { useContext, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { AuthContext } from "../context/auth.context"
import { AuthContextTypes } from "../types"
import "../style/Account.css"

type TextDisplayed = "" | "edit" | "login-success" | "signup-success" | "logout-success" | "edit-success" | "delete-success"

/** view for signup, login, and for editing and deleting an account */
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
    const [errorMessageSignup, setErrorMessageSignup] = useState("")
    const [errorMessageLogin, setErrorMessageLogin] = useState("")
    const [errorMessageEdit, setErrorMessageEdit] = useState("")
    const [errorMessageDelete, setErrorMessageDelete] = useState("")

    /** resets form fields after submitting */
    function resetFields() {
        setUsernameSignup("")
        setPasswordSignup("")
        setUsernameLogin("")
        setPasswordLogin("")
        setUsernameEdit("")
        setPasswordEdit("")
        setErrorMessageSignup("")
        setErrorMessageLogin("")
        setErrorMessageEdit("")
        setErrorMessageDelete("")
    }

    /** validates user data */
    function validateUserData(username: string, password: string, type: string): boolean {
        /** regex pattern used for password */
        const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

        if (!username) {
            if (type === "signup") {
                setErrorMessageSignup("Bitte wähle einen Benutzernamen.")
            } else if (type === "login") {
                setErrorMessageLogin("Bitte gib deinen Benutzernamen an.")
            } else {
                setErrorMessageEdit("Bitte gib entweder deinen alten oder einen neuen Benutzernamen an.")
            }
            return false
        }
        else if (!password) {
            if (type === "signup") {
                setErrorMessageSignup("Bitte wähle ein Passwort.")
            } else if (type === "login") {
                setErrorMessageLogin("Bitte gib dein Passwort an.")
            } else {
                setErrorMessageEdit("Bitte gib entweder dein altes oder ein neues Passwort an.")
            }
            return false
        }
        else if (!regex.test(password)) {
            if (type === "signup") {
                setErrorMessageSignup("Das Passwort muss mindestens acht Zeichen haben. Davon muss eines eine Zahl, eines ein Kleinbuchstabe und eines ein Großbuchstabe sein.")
            } else if (type === "login") {
                setErrorMessageLogin("Das Passwort muss mindestens acht Zeichen haben. Davon muss eines eine Zahl, eines ein Kleinbuchstabe und eines ein Großbuchstabe sein.")
            } else {
                setErrorMessageEdit("Das Passwort muss mindestens acht Zeichen haben. Davon muss eines eine Zahl, eines ein Kleinbuchstabe und eines ein Großbuchstabe sein.")
            }
            return false
        }
        return true
    }

    /** signs up or logs in users */
    function registerUser(type: string) {
        const username: string = type === "signup" ? usernameSignup : usernameLogin
        const password: string = type === "signup" ? passwordSignup : passwordLogin
        if (!validateUserData(username, password, type)) return
        axios.post(
            `${import.meta.env.VITE_BASE_URL}/auth/${type === "signup" ? "signup" : "login"}`,
            { username, password }
        ).then(response => {
            storeToken(response.data.authToken)
            authenticateUser()
            resetFields()
            setTextDisplayed(type === "signup" ? "signup-success" : "login-success")
        }).catch(err => {
            type === "signup"
                ? setErrorMessageSignup("Leider konntest du dich nicht registrieren. Fehlermeldung: "  + err.response.data.errorMessage)
                : setErrorMessageLogin("Leider konntest du dich nicht einloggen. Fehlermeldung: " +  err.response.data.errorMessage)
        })
    }

    /** edits account */
    function editUser() {
        const username: string = usernameEdit
        const password: string = passwordEdit
        if (!validateUserData(username, password, "edit")) return
        axios.put(
            `${import.meta.env.VITE_BASE_URL}/auth/`,
            { userId, username, password },
            { headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` } }
        ).then(response => {
            storeToken(response.data.authToken)
            authenticateUser()
            setTextDisplayed("edit-success")
            resetFields()
        }).catch(err => {
            setErrorMessageEdit("Deine Accountdaten konnten leider nicht geändert werden. Fehlermeldung: " + err.response.data.errorMessage)
        })
    }

    /** deletes account */
    function deleteUser() {
        axios.delete(
            `${import.meta.env.VITE_BASE_URL}/auth/${userId}`,
            { headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` } }
        ).then(() => {
            logOutUser()
            setTextDisplayed("delete-success")
            resetFields()
        }).catch(() => {
            setErrorMessageDelete("Leider ist etwas schiefgegangen. Dein Account konnte nicht gelöscht werden.")
        })
    }

    /** logs user out */
    function handleLogOut() {
        logOutUser()
        setTextDisplayed("logout-success")
    }

    /** gets the correct text depending on state */
    function getText() {
        if (textDisplayed === "login-success") return loginSuccessText
        else if (textDisplayed === "signup-success") return signupSuccessText
        else if (textDisplayed === "logout-success") return logOutSuccessText
        else if (textDisplayed === "edit-success") return editSuccessText
        else if (textDisplayed === "delete-success") return deleteSuccessText
        else if (textDisplayed === "edit") return editForm
        else if (isLoggedIn) return loggedInText
        else return loggedOutText
    }

    /** text displayed if user is not logged in */
    const loggedOutText = (
        <div>
            <h2>Herzlich willkommen!</h2>
            <p>
                Du bist derzeit nicht eingeloggt. Um die vollen Funktionen nutzen zu können, brauchst du einen Account.
                Deine Daten werden nur für die Verwendung dieses E-Learning-Angebots verwendet und nicht an Dritte weitergegeben.
            </p>
            <form>
                <div className="form-grid">
                    <label htmlFor="login-username">Benutzername:</label>
                    <input type="text" id="login-username" autoComplete="username" onChange={e => setUsernameLogin(e.target.value)} />
                    <label htmlFor="login-password">Passwort:</label>
                    <input type="password" id="login-password" autoComplete="current-password" onChange={e => setPasswordLogin(e.target.value)} />
                </div>
                <div className="button-cont">
                    <button type="button" onClick={() => registerUser("login")}>Anmelden</button>
                </div>
                <p className="error-message" style={{ display: errorMessageLogin ? "block" : "none" }}>{errorMessageLogin}</p>
            </form>
            <p>Du bist noch nicht registriert? Das einzige, was du brauchst, ist ein Benutzername und ein Passwort - ohne irgendwelche Kosten!</p>
            <div className="button-cont">
                <button type="button" onClick={() => setSignup(true)}>Jetzt registrieren!</button>
            </div>

            {/* form is opened if user clicks button to open signup form */}
            <form style={{ display: signup ? "block" : "none" }}>
                <div className="form-grid">
                    <label htmlFor="signup-username">Benutzername:</label>
                    <input type="text" id="signup-username" autoComplete="username" onChange={e => setUsernameSignup(e.target.value)} />
                    <label htmlFor="signup-password">Passwort:</label>
                    <input type="password" id="signup-password" autoComplete="new-password" onChange={e => setPasswordSignup(e.target.value)} />
                </div>
                <div className="button-cont">
                    <button type="button" onClick={() => registerUser("signup")}>Registieren</button>
                </div>
                <p className="error-message" style={{ display: errorMessageSignup ? "block" : "none" }}>{errorMessageSignup}</p>
            </form>
        </div>
    )

    /** text displayed if user is logged in */
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
                <p className="error-message" style={{ display: errorMessageDelete ? "block" : "none" }}>{errorMessageDelete}</p>
            </div>
        </div>
    )

    /** text displayed if user wants to edit account */
    const editForm = (
        <div>
            <h3>Account bearbeiten</h3>
            <form>
                <div className="form-grid">
                    <label htmlFor="edit-username">Benutzername:</label>
                    <input type="text" id="edit-username" defaultValue={username} autoComplete="username" onChange={e => setUsernameEdit(e.target.value)} />
                    <label htmlFor="edit-password">Passwort:</label>
                    <input type="password" id="edit-password" autoComplete="current-password" onChange={e => setPasswordEdit(e.target.value)} />
                </div>
                <div className="button-cont">
                    <button type="button" onClick={editUser}>Bearbeiten</button>
                    <button type="button" onClick={() => setTextDisplayed("")}>Zurück</button>
                </div>
                <p className="error-message" style={{ display: errorMessageEdit ? "block" : "none" }}>{errorMessageEdit}</p>
            </form>
        </div>
    )

    /** text displayed after successful signup */
    const signupSuccessText = (
        <div className="success-text-cont">
            <p>Du hast dich erfolgreich registriert.</p>
            <div className="button-cont">
                <Link to={`/${lessonId ? "section-" + lessonId : ""}`}>
                    <button>{lessonId ? "Zur Lektion" : "Zur Startseite"}</button>
                </Link>
            </div>
        </div>
    )

    /** text displayed after successful login */
    const loginSuccessText = (
        <div className="success-text-cont">
            <p>Du hast dich erfolgreich eingeloggt.</p>
            <div className="button-cont">
                <Link to={`/${lessonId ? "section-" + lessonId : ""}`}>
                    <button>{lessonId ? "Zur Lektion" : "Zur Startseite"}</button>
                </Link>
            </div>
        </div>
    )

    /** text displayed after successful edit */
    const editSuccessText = (
        <div className="success-text-cont">
            <p>Du hast deine Daten erfolgreich geändert.</p>
            <div className="button-cont">
                <Link to="/"><button>Zur Startseite</button></Link>
            </div>
        </div>
    )

    /** text displayed after successful log out */
    const logOutSuccessText = (
        <div className="success-text-cont">
            <p>Du hast dich ausgeloggt.</p>
            <div className="button-cont">
                <Link to="/"><button>Zur Startseite</button></Link>
            </div>
        </div>
    )

    /** text displayed after successful deletion */
    const deleteSuccessText = (
        <div className="success-text-cont">
            <p>Du hast deinen Account gelöscht.</p>
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