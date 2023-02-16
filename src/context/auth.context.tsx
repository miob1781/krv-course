import { useState, createContext, PropsWithChildren, useEffect } from "react"
import axios from "axios"
import { AuthContextTypes } from "../types"

export const AuthContext = createContext<AuthContextTypes | null>(null)

export function AuthProviderWrapper({ children }: PropsWithChildren) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [username, setUsername] = useState("")
    const [lessonIds, setLessonIds] = useState([])

    const storeToken = (token: string) => {
        localStorage.setItem("authToken", token)
    }

    const authenticateUser = () => {
        const storedToken: string | null = localStorage.getItem("authToken")
        if (storedToken) {
            axios.get(`${import.meta.env.VITE_BASE_URL}/auth/verify`,
                { headers: { Authorization: `Bearer ${storedToken}` } }
            ).then(response => {
                const userData = response.data
                setIsLoggedIn(true)
                setIsLoading(false)
                setUsername(userData.username)
                setLessonIds(userData.lessonIds)
            }).catch(err => {
                console.log(err)
                setIsLoggedIn(false)
                setIsLoading(false)
                setUsername("")
                setLessonIds([])
            })
        } else {
            setIsLoggedIn(false)
            setIsLoading(false)
            setUsername("")
            setLessonIds([])
        }
    }

    const removeToken = () => {
        localStorage.removeItem("authToken")
    }

    const logOutUser = () => {
        removeToken()
        authenticateUser()
    }

    useEffect(() => {
        authenticateUser()
    }, [])

    return (
        <AuthContext.Provider value={{ isLoggedIn, isLoading, username, lessonIds, storeToken, authenticateUser, logOutUser }}>
            {children}
        </AuthContext.Provider>
    )
}