import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-evenly gap-8">
      <a
        href="https://wa.me/yourNumber"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-3xl text-green-600 transition hover:scale-130" />
      </a>
      <a
        href="https://instagram.com/yourHandle"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-3xl text-pink-600 transition hover:scale-130" />
      </a>
      <a
        href="https://youtube.com/yourChannel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube className="text-3xl text-red-600 transition hover:scale-130" />
      </a>
      <a
        href="https://facebook.com/yourPage"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF className="text-3xl text-blue-600 transition hover:scale-130" />
      </a>
    </div>
  );
};

export default SocialLinks;
