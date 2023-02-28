import { useState, createContext, PropsWithChildren, useEffect } from "react"
import axios from "axios"
import { AuthContextTypes, LessonNotes } from "../types"

/** context for authentication */
export const AuthContext = createContext<AuthContextTypes | null>(null)

/** component which wraps the provider of AuthContext */
export function AuthProviderWrapper({ children }: PropsWithChildren) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [userId, setUserId] = useState("")
    const [username, setUsername] = useState("")
    const [lessonIds, setLessonIds] = useState<string[]>([])
    const [notes, setNotes] = useState<LessonNotes[]>([])

    /** stores authentication token */
    function storeToken(token: string) {
        localStorage.setItem("authToken", token)
    }

    /** resets values if authentication is unsuccessful */
    function resetValues() {
        setIsLoggedIn(false)
        setIsLoading(false)
        setUserId("")
        setUsername("")
        setLessonIds([])
        setNotes([])
    }

    /** loads notes of a section */
    function loadNotes(lessonId: string) {
        axios.get(
            `${import.meta.env.VITE_BASE_URL}/notes`,
            {
                params: { userId, lessonId },
                headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
            }
        ).then(response => {
            const lessonNotesFromDB: LessonNotes | undefined = response.data.lessonNotes
            lessonNotesFromDB && setNotes((prevNotes: LessonNotes[]) => {
                let copy = [...prevNotes]
                copy = copy.length > 0 ? copy.filter((lessonNotes: LessonNotes) => lessonNotes.lessonId !== lessonId) : []
                copy.push(lessonNotesFromDB)
                return copy
            })
        }).catch(err => console.log("Error while loading lessonNotes: ", err))
    }

    /** loads ids of all completed lessons */
    function loadLessonIds(userId: string, authToken: string) {
        axios.get(`${import.meta.env.VITE_BASE_URL}/lessons/${userId}`, { headers: { Authorization: `Bearer ${authToken}` }})
            .then(response => setLessonIds(response.data?.lessonIds))
            .catch(err => console.log("An error has occurred while loading lessonIds: ", err))
    }

    /** authenticates user */
    function authenticateUser() {
        const storedToken: string | null = localStorage.getItem("authToken")
        if (storedToken) {
            axios.get(`${import.meta.env.VITE_BASE_URL}/auth/verify`,
                { headers: { Authorization: `Bearer ${storedToken}` } })
                .then(response => {
                    setIsLoggedIn(true)
                    setIsLoading(false)
                    setUserId(response.data?.userId)
                    setUsername(response.data?.username)
                    loadLessonIds(response.data?.userId, storedToken)
                })
                .catch(err => {
                    console.log(err)
                    resetValues()
                })
        } else {
            resetValues()
        }
    }

    /** removes authentication token */
    function removeToken() {
        localStorage.removeItem("authToken")
    }

    /** logs out user */
    function logOutUser() {
        removeToken()
        authenticateUser()
    }

    // authenticates user when app mounts
    useEffect(() => {
        authenticateUser()
    }, [])

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            isLoading,
            userId,
            username,
            lessonIds,
            setLessonIds,
            notes,
            setNotes,
            storeToken,
            authenticateUser,
            logOutUser,
            loadNotes
        }}>
            {children}
        </AuthContext.Provider>
    )
}