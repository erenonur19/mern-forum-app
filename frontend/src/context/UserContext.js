import {createContext} from 'react'
import {useState} from 'react' 
const UserContext=createContext()

export const UserProvider=({children}) =>{

    const[lor, setLor]=useState(true)
    const [user,setUser]=useState({})
    const values={
        lor,
        setLor,
        user,
        setUser,
    }
    

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>


}
export default UserContext;