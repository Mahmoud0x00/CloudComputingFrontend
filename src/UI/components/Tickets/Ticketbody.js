import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

const Ticketbody = (props) => {
    const jsx = reactElementToJSXString(props.body);
    return(
        <div className="max-w-md text-ellipsis" style={{
            height: "100%",
            padding: "20px 10px",
            paddingLeft: "1cm",
            borderTop: "1px solid #e2e8f0",
            borderBottom: "1px solid #e2e8f0",
            flex: "0 1 auto",
        }}>
            {jsx.substring(0, 25)+'..'}
        </div>
    ); 
};

export default Ticketbody;