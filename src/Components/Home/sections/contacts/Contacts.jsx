import { FaPhone, FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="dark:bg-gray-700 p-5 text-center flex-1">
      <div className="flex flex-col-reverse gap-5 items-center justify-center p-5">
        <div className="mx-5">
          <a
            href="tel:+8801760995739"
            className="text-2xl dark:text-gray-300 hover:text-orange-400  dark:hover:text-orange-400 flex items-center mb-3"
          >
            <FaPhone className="mr-3 text-3xl" />Phone: +8801760995739
          </a>
        </div>
        <div className="mx-5">
          <a
            href="https://wa.me/8801760995739"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl dark:text-gray-300 hover:text-orange-400  dark:hover:text-orange-400  flex items-center mb-3"
          >
            <FaWhatsapp className="mr-3 text-4xl" /> WhatsApp: +8801760995739
          </a>
        </div>
        <div className="mx-5">
          <a
            href="https://www.linkedin.com/in/sadmanryanriad/"
            target="blank"
            className="text-2xl dark:text-gray-300 hover:text-orange-400  dark:hover:text-orange-400  flex items-center mb-3"
          >
            <FaLinkedin className="mr-3 md:text-4xl" /> LinkedIn
          </a>
        </div>
        <div className="mx-5">
          <a
            href="mailto:sadmanryanriad@gmail.com"
            className="text-2xl dark:text-gray-300 hover:text-orange-400  dark:hover:text-orange-400  flex items-center mb-3"
          >
            <FaEnvelope className="mr-3 md:text-3xl" /> sadmanryanriad@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
