import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate } from "react-router"

export const PublicRoute = ({ children }) => {

  const path = localStorage.getItem( 'lastPath' ) || '/';

  const { logged } = useContext( AuthContext )

  return (logged)
            ? <Navigate to={ path } />
            : children
}