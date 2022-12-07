
import { Badge } from "flowbite-react";

const TicketHeader = (props) => {
    return (
        <div className="flex items-center justify-center bg-slate-400 w-full rounded border-solid">
            <div className="flex flex-col items-center px-9 ">
                <h1>{props.title}</h1>
            </div>
            <div className="ticket-header__status">
                {props.status === 'open' ? (<Badge color="success" size="sm">Open</Badge>): (<Badge color="failure" size="sm">Closed</Badge>)}
            </div>
        </div>
    );
};

export default TicketHeader;