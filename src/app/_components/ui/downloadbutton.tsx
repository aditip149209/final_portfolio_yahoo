import React from "react";

const Download_Button = () => {
    return(
        <div>
            <a
            href="AditiPandey_231IT003_B_Tech_2-3.pdf"
            download
            className="px-4 py-2 gradient-border-button inline-flex justify-start items-start gap-2.5">
                <p className="justify-start text-white text-base font-medium">Download my resume!</p>
            </a>
        </div>
    )
};

export default Download_Button;