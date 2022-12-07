const Ticketbody = (props) => {
    return(
        <div className="flex flex-col items-center gap-2">
            {props.children}
        </div>
    ); 
};

export default Ticketbody;