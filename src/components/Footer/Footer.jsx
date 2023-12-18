import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const socialMediaHandles = [
  { icon: <FaFacebook />, link: "https://www.facebook.com/krishna.malviya.376695/" },
  { icon: <FaGithub />, link: "https://github.com/krishnaa-1" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/scar.0p/" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/krishna-malviya-188b34230/" },
];
function Footer() {
  const handleSocialMediaClick = (link) => {
    window.open(link, "_blank");
  };
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="Contact"></a>
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by{" "}
            <a href="mailto:krishnamalviya@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.menu}>
            {socialMediaHandles.map((handle, index) => (
              <li
                key={index}
                onClick={() => handleSocialMediaClick(handle.link)}
              >
                {handle.icon}
              </li>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Footer;
