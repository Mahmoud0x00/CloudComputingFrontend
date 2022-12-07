const ticket = (props) => {
    return(
        <div className="flex flex-col items-center gap-8 rounded-xl bg-slate-400 w-[500px] aspect-square overflow-hidden">
            {props.children}
        </div>
    );
};

export default ticket;