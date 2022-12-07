import React, {useState, useEffect, useContext} from "react";
import TicketsList from "../UI/components/Tickets/TicketsList";
import Authcontext from "../store/Authcontext";
import { Spinner } from "flowbite-react";
import { Navigate } from "react-router-dom";

const MyTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const authd = useContext(Authcontext);
    const jwt = authd.token;

useEffect(() => {
    const fetchTickets = async () => {
        try {
            const response = await fetch("http://localhost:9000/api/ticket/getUserTickets", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + jwt
                }
            });
            const responseData = await response.json();
            if(!response.ok){
                throw new Error(responseData.error);
            }
            console.log(responseData.tickets);
            setTickets(responseData.tickets);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    };
    fetchTickets();
}, [jwt]);

    if(authd.token === null){
        return <Navigate to="/login" />
    }
    if(isLoading){
        return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
            <Spinner
                color="success"
                aria-label="Purple spinner example"
                size="2xl"
            />
        </div>
        );
    }

    return (
        <>
        {tickets.length === 0 && <div className="text-center text-2xl text-blue-700 py-20">You have no tickets</div>}
        {tickets.length > 0 && <TicketsList tickets={tickets} />}
        </>
    );
};

export default MyTickets;