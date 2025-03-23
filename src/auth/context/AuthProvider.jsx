import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'
import { useLocation } from 'react-router'

const initialState = {
  logged: false,
}

export const AuthProvider = ({ children }) => {

  const path = useLocation();

  const init = () => {
    const user = JSON.parse( localStorage.getItem( 'user' ) );

    return {
      logged: !!user,
      user: user
    }
  }

  const [ authState, dispatch ] = useReducer( authReducer, initialState, init )

  const login = (name = '') => {

    const user = { id: 'ABC', name }

    const action = {
      type: types.login,
      payload: user
    }

    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action)
  }

  const logout = () => {

    const action = {
      type: types.logout,
    }

    localStorage.removeItem('user');
    localStorage.setItem( 'lastPath', path.pathname + path.search )
    
    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login: login,
      logout: logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
