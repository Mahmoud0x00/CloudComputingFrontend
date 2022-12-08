import AuthContext from './Authcontext.js';

import { useState } from 'react';

const AuthProvider = (props) => {
    const [token, setToken] = useState(null);

    const authcontext = {
        token: token,
        login: (token) => {
            if(token === null){
                setToken(localStorage.getItem("token"));
            }
            setToken(token);
        },
        logout: () => {
            setToken(null);
        }
    };
    return (
        <AuthContext.Provider value={authcontext}>
            {props.children}
        </AuthContext.Provider>
    )
    };

export default AuthProvider;