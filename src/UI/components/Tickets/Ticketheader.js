
import { Badge } from "flowbite-react";
import React from "react";
import reactElementToJSXString from 'react-element-to-jsx-string';

const TicketHeader = (props) => {
    const jsx = reactElementToJSXString(props.title);
    return (
        <div className="flex justify-center rounded border-solid">
            <div className="flex flex-col items-center max-w-xs line-clamp-2" style={{
                height: "100%",
                padding: "20px 10px",
                paddingRight: "4px",
                fontWeight: "bold",
                fontFamily: "sans-serif",
                truncate: "true",
                fontSize: "1.2rem",
                paddingLeft: "1cm",
            }}>
                <h1>{jsx.substring(0,20)}</h1>
            </div>
            <div style={{
                height: "100%",
                padding: "20px 10px",
                paddingLeft: "4cm",
                maxWidth: "10cm",
            }} className="max-w-sm">
                {props.status === 'open' ? (<Badge color="success" size="sm">Open</Badge>): (<Badge color="failure" size="sm">Closed</Badge>)}
            </div>
        </div>
    );
};

export default TicketHeader;