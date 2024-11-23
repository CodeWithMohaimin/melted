import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between py-[15px] md:py-[30px]">
      <Link
        className="navbarH1 uppercase"
        href="https://www.tiktok.com/@arnmcc_"
      >
        TIKTOK
      </Link>
      <Link
        className="navbarH1 uppercase"
        href="https://www.instagram.com/tldstudio.xyz/"
      >
        INSTAGRAM
      </Link>
      <Link
        className="navbarH1 uppercase"
        href="https://www.linkedin.com/in/arnmcc/"
      >
        LINKEDIN
      </Link>
    </footer>
  );
};

export default Footer;
