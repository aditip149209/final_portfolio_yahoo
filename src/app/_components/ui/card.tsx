import React from "react";

const Card = ({heading, content} : {heading: string, content: string[]}) =>{
    return(
        <div className="border border-gray-700 font-mono">
            <div className="p-3 border border-gray-700">
                <h3 className="text-white font-bold text-base">
                    {heading}
                </h3>
            </div>
            <div className="p-3">
            <div className="flex flex-wrap gap-2 text-gray-400 space-y-2">
                {content.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
            </div>
        </div>
    )
};

export default Card;