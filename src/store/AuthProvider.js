import AuthContext from './Authcontext.js';

import { useState } from 'react';

const AuthProvider = (props) => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userType, setUserType] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const authcontext = {
        token: token,
        userId: userId,
        userType: userType,
        isLoggedIn: isLoggedIn,
        login: (id, userId, token, userType) => {
            setToken(token);
            setUserId(userId);
            setUserType(userType);
            setIsLoggedIn(true);
        },
        logout: () => {
            setToken(null);
            setUserId(null);
            setUserType(null);
            setIsLoggedIn(false);
        }
    };
    return (
        <AuthContext.Provider value={authcontext}>
            {props.children}
        </AuthContext.Provider>
    )
    };

export default AuthProvider;