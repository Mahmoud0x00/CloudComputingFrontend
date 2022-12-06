import { createContext } from "react";

const Authcontext = createContext({
    token: '',
    userId: '',
    userType: '',
    login: (userId, token, userType) => {},
    logout: () => {}
});

export default Authcontext;