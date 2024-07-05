import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col  md:flex-row  justify-between items-center mt-20 md:mt-0">
      <div>
        <h2 className="font-semibold mb-4 md:mb-0">Thanks For Visiting My Portfolio</h2>
      </div>
      <div className="flex items-center gap-5">
        <h3 className>Connect With Me </h3>
        <Link to='https://github.com/SamirSadek' className="text-2xl">
          <FaGithub />
        </Link>
        <Link to='https://www.linkedin.com/in/samir-sadek-9487a6132/' className="text-2xl">
        <FaLinkedin />
        </Link>
        <Link to='https://www.facebook.com/iamsamirsadek/' className="text-2xl">
        <FaFacebookSquare />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
