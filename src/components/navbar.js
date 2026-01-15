"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../styles/navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Define the links with their names only
  const navLinks = [
    { name: "Home" },
    { name: "Listings" },
    { name: "Let's Move" },
    { name: "About Us" }
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image
          src="/images/icon-white.png"
          alt="Marci Metzger Homes"
          width={200}
          height={80}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>

      {/* Desktop Links */}
      <ul className={styles.links}>
        {navLinks.map((link, index) => (
          <li key={index}>
            {link.name}
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* Overlay for mobile side panel */}
      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

      {/* Mobile Side Panel */}
      <div className={`${styles.sidePanel} ${isMenuOpen ? styles.open : ""}`}>
        <button className={styles.closeBtn} onClick={closeMenu}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}