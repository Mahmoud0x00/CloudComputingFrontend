import { createContext } from "react";

const Authcontext = createContext({
    token: '' || localStorage.getItem("token"),
    login: (token) => {},
    logout: () => {}
});

export default Authcontext;