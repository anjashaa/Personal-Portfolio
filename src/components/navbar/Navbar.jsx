import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Anjasha
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/anjasha-singh/">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://github.com/anjashaa">
            <img src="/dribbble.png" alt="" />
          </a>
          <a href="https://x.com/anjashaaaa">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://www.instagram.com/anjashaaaa/">
            <img
              src="/instagram.png
            "
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
