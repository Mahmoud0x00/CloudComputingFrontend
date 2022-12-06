import { useContext } from "react";
import { Navbar } from "flowbite-react";
import AutheContext from "../../store/Authcontext";
import logo from "../../images/Logo.png";

const explore = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const authd = useContext(AutheContext);

    return (
        <Navbar fluid={true} rounded={true}>
            <Navbar.Brand href="/">
                <img src={logo} 
                    alt="Flowbite"
                    className="mr-2 h-20 sm:h-12"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Supsys
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="/help" className="font-semibold via-black">Help</Navbar.Link>
                {!authd.token &&  <Navbar.Link href="/login" className="font-semibold via-black">Login</Navbar.Link>}
                {!authd.token &&  <Navbar.Link href="/signup" className="font-semibold via-black">Signup</Navbar.Link>}
                {authd.token &&  <Navbar.Link href="/tickets" className="font-semibold via-black">My Tickets</Navbar.Link>}
                {authd.token &&  <Navbar.Link href="/myaccount" className="font-semibold via-black">My Account</Navbar.Link>}
                {authd.token &&  <Navbar.Link href="/logout" className="font-semibold via-black">Logout</Navbar.Link>}        
                    
            </Navbar.Collapse>
        </Navbar>
    );
};

export default explore;