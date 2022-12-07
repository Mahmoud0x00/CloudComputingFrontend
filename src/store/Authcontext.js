import { createContext } from "react";

const Authcontext = createContext({
    token: '',
    login: (token) => {},
    logout: () => {}
});

export default Authcontext;