import { useContext } from "react";
// import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
// import { Navigate } from "react-router";

export const LoginPage = () => {

  // const navigate = useNavigate();
  const { login } = useContext( AuthContext );


  const onLogin = () => {

    // const path = localStorage.getItem( 'lastPath' ) || '/';

    login( 'Cristobal Fuentealba' );

  //   Navigate( '/', {
  //     replace: true
  //   })
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={ () => onLogin() }
      >
        Entrar
      </button>
    </div>
  )
}
