import TicketSummary from "./TicketsSummary";

const TicketsList = (props) => {
    return (
    <div className="grid grid-cols-3 gap-5 items-center justify-center">
        {props.tickets.map((ticket) => (
            <TicketSummary key={ticket._id} ticket={ticket} />
        ))}
    </div>
    );
};

export default TicketsList;