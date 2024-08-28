import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/img/logo.svg";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center pt-10 py-4">
      <Link to="/">
        <Logo className="h-8" />
      </Link>
    </div>
  );
};

export default Footer;
