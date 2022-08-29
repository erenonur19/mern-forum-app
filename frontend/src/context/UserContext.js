import {createContext} from 'react'
import {useState} from 'react' 
const UserContext=createContext()

export const UserProvider=({children}) =>{

    const[lor, setLor]=useState(true)   //for navigation between login and register
    const [logged,setLogged]=useState(false) //is user loogged or not
    const [user,setUser]=useState({})   // user information 
    const values={
        lor,
        setLor,
        user,
        setUser,
        logged,
        setLogged
    }
    

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>


}
export default UserContext;