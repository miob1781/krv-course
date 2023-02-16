import { useState, createContext, PropsWithChildren, useEffect } from "react"
import axios from "axios"
import { AuthContextTypes } from "../types"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext<AuthContextTypes | null>(null)

export function AuthProviderWrapper({ children }: PropsWithChildren) {
    const navigate = useNavigate()

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [username, setUsername] = useState("")
    const [lessonIds, setLessonIds] = useState([])

    function storeToken(token: string) {
        localStorage.setItem("authToken", token)
    }

    function authenticateUser() {
        const storedToken: string | null = localStorage.getItem("authToken")
        if (storedToken) {
            axios.get(`${import.meta.env.VITE_BASE_URL}/auth/verify`,
                { headers: { Authorization: `Bearer ${storedToken}` } })
                .then(response => {
                    const userData = response.data
                    setIsLoggedIn(true)
                    setIsLoading(false)
                    setUsername(userData.username)
                    setLessonIds(userData.lessonIds)
                })
                .catch(err => {
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

    function removeToken() {
        localStorage.removeItem("authToken")
    }

    function logOutUser() {
        removeToken()
        authenticateUser()
        navigate("/")
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