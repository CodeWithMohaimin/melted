import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-[15px] md:py-[30px]">
      <Link className="navbarH1 uppercase" href="/">
        INfo
      </Link>
      <Link className="navbarH1 uppercase" href="/">
        AARON MCCAULEY
      </Link>
      <Link
        className="navbarH1 uppercase"
        href="mailto:aaron@tldstudio.xyz?subject=Project%20Kick-Off"
      >
        MAIL
      </Link>
    </nav>
  );
};

export default Navbar;
