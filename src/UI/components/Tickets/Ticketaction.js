const Ticketaction = (props) => {
    return(
        <div className="flex flex-col items-center gap-4 px-9">
            {props.children}
        </div>
    ); 
};

export default Ticketaction;