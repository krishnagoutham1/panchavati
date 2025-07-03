import { FaPhone } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import SocialLinks from "../Components/SocialLinks";

const ContactDetails = () => {
  return (
    <div className="my-auto space-y-6">
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-green-100 p-3">
          <FaPhone className="h-6 w-6 text-green-600" />
        </div>
        <div>
          <h4 className="mb-1 font-semibold">Phone</h4>
          <p>+91 84640 33555</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-green-100 p-3">
          <MdMailOutline className="h-6 w-6 text-green-600" />
        </div>
        <div>
          <h4 className="mb-1 font-semibold">Email</h4>
          <p>info@Panchavati.com</p>
          <p>sales@Panchavati.com</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-green-100 p-3">
          <FaLocationDot className="h-6 w-6 text-green-600" />
        </div>
        <div>
          <h4 className="mb-1 font-semibold">Address</h4>
          <p>
            Panchavati Farms
            <br />
            Toolekalan (V) , Ibrahimpatnam (M) ,
            <br />
            Ranga Reddy Dist., Hyderabad.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-green-100 p-3">
          <FaRegClock className="h-6 w-6 text-green-600" />
        </div>
        <div>
          <h4 className="mb-1 font-semibold">Office Hours</h4>
          <p>
            Monday - Saturday: 9:00 AM - 6:00 PM
            <br />
            Sunday: 10:00 AM - 4:00 PM
          </p>
        </div>
      </div>

      <div className="p-3">
        <h3 className="mb-5 text-xl font-bold">Follow Us </h3>
        <SocialLinks />
      </div>
    </div>
  );
};

export default ContactDetails;
