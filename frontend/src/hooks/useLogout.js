import { useState } from "react"
import {useAuthContext} from '../context/AuthContext'

const useLogout = ()=> {
    const [loading , setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()

    const logout = async ()=> {
        try {
            const res = await fetch("/api/auth/logout" ,{
                method: "POST" ,
                headers: {"Content-Type":"application/json"}
            });
            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.removeItem("note-user");
            setAuthUser(null)

        } catch{
            setLoading(false)
        }
    }

    return {loading , logout}
}

export default useLogout