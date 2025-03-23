import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate, useLocation } from "react-router"

export const PrivateRoute = ({ children }) => {

  const path = useLocation();
  localStorage.setItem( 'lastPath', path.pathname + path.search )

  const { logged } = useContext( AuthContext )

  return (logged)
            ? children
            : <Navigate to="/login" />
  
}
