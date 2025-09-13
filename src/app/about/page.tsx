import Image from "next/image";
import Button from "../_components/ui/button";
import Download_Button from "../_components/ui/downloadbutton";


const About = () => {
    return(
        <div>
            this is about
            <Button href="contact">
                Contact Me!
            </Button>
            <Download_Button />
        </div>
    )
};

export default About;