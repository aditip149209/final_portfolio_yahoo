import React from "react";

const Button = ({href, children} : {href: string; children: string}) => {
    return(
        <>  
            <a href={href}>
            <div className="px-4 py-2 gradient-border-button inline-flex justify-start items-start gap-2.5">
            <div className="justify-start text-white text-base font-medium">{children}</div>
            </div>
            </a>
        </>
    )
};

export default Button;