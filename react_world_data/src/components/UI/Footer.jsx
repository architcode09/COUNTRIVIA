import footerContact from "../../api/footerApi.json";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin
  
} from "react-icons/fa";

import { FaSquareInstagram } from "react-icons/fa6";

export const Footers = () => {
  const footerIcon = {
    FaMapMarkerAlt: <FaMapMarkerAlt />,
    FaPhoneAlt: <FaPhoneAlt />,
    FaEnvelope: <FaEnvelope />
  };

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;

          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer bottom part */}
      <div className="footer-bottom">
        <div className="footer-linkedin">
          <FaLinkedin />
          <a
            href="https://www.linkedin.com/in/archit-surmal-486641298"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn: Archit Surmal
          </a>
          <br/>
          
          <a
            href="https://www.instagram.com/archittt_99/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareInstagram /> Instagram: archittt_99
          </a>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Archit Surmal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
