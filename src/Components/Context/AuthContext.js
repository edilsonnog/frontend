import React, { createContext } from 'react';

import api from '../../services/api';

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    return (
        <AuthContext.Provider  value={{nome: 'Edilson'}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };