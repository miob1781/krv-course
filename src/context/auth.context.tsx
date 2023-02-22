import { useState, createContext, PropsWithChildren, useEffect } from "react"
import axios from "axios"
import { AuthContextTypes, LessonNotes } from "../types"

export const AuthContext = createContext<AuthContextTypes | null>(null)

export function AuthProviderWrapper({ children }: PropsWithChildren) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [userId, setUserId] = useState("")
    const [username, setUsername] = useState("")
    const [lessonIds, setLessonIds] = useState<string[]>([])
    const [notes, setNotes] = useState<LessonNotes[]>([])

    function storeToken(token: string) {
        localStorage.setItem("authToken", token)
    }

    function resetValues() {
        setIsLoggedIn(false)
        setIsLoading(false)
        setUserId("")
        setUsername("")
        setLessonIds([])
        setNotes([])
    }

    function loadNotes(lessonId: string) {
        axios.get(
            `${import.meta.env.VITE_BASE_URL}/notes`,
            {
                params: { userId, lessonId },
                headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
            }
        ).then(response => {
            setNotes((prevNotes: LessonNotes[]) => {
                let copy = [...prevNotes]
                copy = copy.filter((lessonNotes: LessonNotes) => lessonNotes.lessonId !== lessonId)
                copy.push(response.data.lessonNotes)
                return copy
            })
        }).catch(err => console.log("Error while loading lessonNotes: ", err))
    }

    function loadLessonIds(userId: string, authToken: string) {
        axios.get(`${import.meta.env.VITE_BASE_URL}/lessons/${userId}`, { headers: { Authorization: `Bearer ${authToken}` }})
            .then(response => setLessonIds(response.data?.lessonIds))
            .catch(err => console.log("An error has occurred while loading lessonIds: ", err))
    }

    function authenticateUser() {
        const storedToken: string | null = localStorage.getItem("authToken")
        if (storedToken) {
            axios.get(`${import.meta.env.VITE_BASE_URL}/auth/verify`,
                { headers: { Authorization: `Bearer ${storedToken}` } })
                .then(response => {
                    console.log(response.data)
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

    function removeToken() {
        localStorage.removeItem("authToken")
    }

    function logOutUser() {
        removeToken()
        authenticateUser()
    }

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