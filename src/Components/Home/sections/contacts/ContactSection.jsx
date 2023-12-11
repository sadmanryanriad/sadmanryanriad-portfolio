import Header from "../../../mini-components/Header";
import ContactForm from "./ContactForm";
import Contacts from "./Contacts";

const ContactSection = () => {
    return (
<div id="contact-me" className="pt-10">
<Header>Contact Me</Header>
<div className="flex flex-col md:flex-row-reverse max-w-6xl mx-auto">
            <ContactForm></ContactForm>
            <Contacts></Contacts>
        </div>
</div>
    );
};

export default ContactSection;