import { useEffect, useRef, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons";
import { ThemeToggler } from "./ThemeToggler/ThemeToggler";

const navLinks = [
  {
    id: 1,
    text: "Sobre mí",
    href: "#sobreMi",
  },
  {
    id: 2,
    text: "Mis proyectos",
    href: "#misProyectos",
  },
  {
    id: 3,
    text: "Contáctame",
    href: "#contactame",
  },
];

export const Header = () => {
  const collapseNavbar = useRef(null);
  const navbar = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    const menu = document.getElementById("navbar-mobile");
    setMenuOpen(!menuOpen);
    menu.classList.toggle("hidden");
    navbar.current.classList.add("bg-[var(--background)]");
  };
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
    if (currentScrollPos > 10) {
      navbar.current.classList.remove("bg-transparent");
      navbar.current.classList.add("bg-[var(--background)]");
      navbar.current.classList.add("shadow-2xl");
      navbar.current.classList.add("shadow-[var(--nav-shadow)]");
    }
    if (currentScrollPos < 10) {
      navbar.current.classList.remove("bg-[var(--background)]");
      navbar.current.classList.add("bg-transparent");
      navbar.current.classList.remove("shadow-2xl");
      navbar.current.classList.remove("shadow-[var(--nav-shadow)]");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav
      id="navbar"
      ref={navbar}
      className={`fixed top-0 left-0 w-full ${visible ? "top-0" : "-top-16"}
    transition-all z-50 bg-transparent
      `}
    >
      <section className="u-center flex justify-between h-16 items-center">
        <div className="flex items-center gap-2">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="h-10 w-10 rounded-lg flex items-center justify-center hover:ring-2 hover:ring-[var(--text-nav)] transition-all duration-300 focus:outline-none md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <IconX className="w-10 h-10" />
            ) : (
              <IconMenu2 className="w-10 h-10" />
            )}
          </button>
          <a
            href="/"
            aria-label="Home"
            className="text-3xl font-extrabold text-[var(--foreground)] hover:scale-110 transition-all duration-300 "
          >
            {"{ gian }"}
          </a>
        </div>

        <div>
          <div className="flex gap-2 items-center h-full md:hidden">
            <ThemeToggler />
          </div>
          <div
            className="hidden absolute left-0 w-full md:hidden bg-[var(--background)]"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            style={{
              boxShadow: " 0px 15px 10px -15px var(--nav-shadow)",
            }}
            tabIndex="-1"
            id="navbar-mobile"
            ref={collapseNavbar}
          >
            <ul className="flex flex-col p-4 text-xl w-full items-start ">
              {navLinks.map((link) => {
                return (
                  <a
                    href={link.href}
                    className="py-2 pl-3 text-bold  hover:bg-[var(--hover-nav)] w-full"
                    key={link.id}
                    onClick={() => {
                      toggleMenu();
                    }}
                  >
                    <li key={link.id}>{link.text}</li>
                  </a>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="hidden w-fit md:flex md:justify-end h-full">
          <ul className="flex items-center h-full w-fit">
            {navLinks.map((link) => {
              return (
                <a
                  href={link.href}
                  key={link.id}
                  className="h-full flex text-lg items-center p-2 hover:bg-[var(--hover-nav)] text-[var(--text-nav)] hover:text-[var(--foreground)]"
                >
                  <li key={link.id}>{link.text}</li>
                </a>
              );
            })}
            <ThemeToggler />
          </ul>
        </div>
      </section>
    </nav>
  );
};
