"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <nav
      className={`${
        open ? "no-doc-scroll" : ""
      } font-light backdrop-blur-md bg-white/60 border-b border-white/30 sticky top-0 z-50 w-full`}
    >
      {/* DESKTOP NAVBAR */}
      <DesktopMenu pathname={pathname} />

      {/* MOBILE NAVBAR */}
      <MobileMenu open={open} setOpen={setOpen} toggleNav={toggleNav} />
    </nav>
  );
};

export default Navbar;
