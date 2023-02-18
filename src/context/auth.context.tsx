import { useState, createContext, PropsWithChildren, useEffect } from "react"
import axios from "axios"
import { AuthContextTypes, NoteObject, SectionData } from "../types"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext<AuthContextTypes | null>(null)

export function AuthProviderWrapper({ children }: PropsWithChildren) {
    const navigate = useNavigate()

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [userId, setUserId] = useState("")
    const [username, setUsername] = useState("")
    const [lessonIds, setLessonIds] = useState<string[]>([])
    const [notes, setNotes] = useState<NoteObject[]>([])

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
                    setLessonIds(response.data?.lessonIds)
                    setNotes(response.data?.notes)
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
        navigate("/")
    }

    function getLessonDone(lessonId: string): boolean {
        const lessonDone: boolean = lessonIds.includes(lessonId)
        return lessonDone
    }

    function getLessonDisabled(sectionData: SectionData[], lessonId: string): boolean {
        let sectionDisabled: boolean
        const currentSubSectionIndex: number = Number(lessonId[2])
        if (currentSubSectionIndex === 1) {
            sectionDisabled = false
        } else if (!getLessonDone(sectionData[currentSubSectionIndex - 2].lessonId)) {
            sectionDisabled = true
        } else {
            sectionDisabled = false
        }
        return sectionDisabled
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
            getLessonDone,
            getLessonDisabled
        }}>
            {children}
        </AuthContext.Provider>
    )
}