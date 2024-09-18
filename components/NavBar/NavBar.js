import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../../styles/Navbar.module.css";
import TextNav from "../Texts/TextNav";
import ButtonHover from "../Texts/ButtonHover";
import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isArrowUp, setIsArrowUp] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsWideScreen(window.innerWidth > 990);
    }

    const handleResize = () => {
      setIsWideScreen(
        typeof window !== "undefined" && window.innerWidth > 1080
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setClick(false);
    setIsDropdownOpen(false);
    setIsArrowUp(false);
  };

  const closeHomeMenu = () => {
    setClick(false);
    setIsDropdownOpen(false);
    setIsArrowUp(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsArrowUp(!isArrowUp);
  };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            className={styles.logo}
            src={require("../../assets/logo.png")}
            alt=""
          
          />
        </Link>

        <ul
          className={
            click
              ? styles["nav-menu"] + " " + styles.active
              : styles["nav-menu"]
          }
        >
          {click &&
            <li className={router.pathname === "/" ? styles.menu : ""}>
              <Link href="/" onClick={closeHomeMenu}>
                <TextNav label="Home" isActive={router.pathname === "/"} />
              </Link>
            </li>}
          <li className={router.pathname === "/about" ? styles.menu : ""}>
            <Link href="/about" onClick={closeMenu}>
              <TextNav label="Home" isActive={router.pathname === "/about"} />
            </Link>
          </li>
          <div className={styles.dropdown}>
            <li
              style={{ display: "flex" }}
              className={styles.dropbtn}
              onClick={toggleDropdown}
            >
              <TextNav label="Product" />

            
            </li>
            {isWideScreen && (
              <div className={styles["dropdown-content"]}>
                <Link href="/mobile-application" onClick={closeMenu}>
                  Mobile Application
                </Link>
                <Link href="/website" onClick={closeMenu}>
                  Web Development Services
                </Link>
                <Link href="/ui-ux-design" onClick={closeMenu}>
                  UI/UX Design
                </Link>
                <Link href="/sqa" onClick={closeMenu}>
                  SQA
                </Link>
              </div>
            )}
            {!isWideScreen && isDropdownOpen && (
              <ul style={{ padding: "0" }}>
                <li className={router.pathname === "/mobile-application" ? styles.menu : styles.drop}>
                  <Link href="/mobile-application" onClick={closeMenu}>
                    <TextNav label="ABOUT US" />
                  </Link>
                </li>
                <li className={router.pathname === "/website" ? styles.menu : styles.drop}>
                  <Link href="/website" onClick={closeMenu}>
                    <TextNav label="WHERE TO BUY" />
                  </Link>
                </li>
                <li className={router.pathname === "/ui-ux-design" ? styles.menu : styles.drop}>
                  <Link href="/ui-ux-design" onClick={closeMenu}>
                    <TextNav label="WARRANTY" />
                  </Link>
                </li>
                <li className={router.pathname === "/SQA" ? styles.menu : styles.drop}>
                  <Link href="/sqa" onClick={closeMenu}>
                    <TextNav label="FAQ" />
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <li className={router.pathname === "/industries" ? styles.menu : ""}>
            <Link href="/industries" onClick={closeMenu}>
              <TextNav
                label="ABOUT US"
                isActive={router.pathname === "/industries"}
              />
            </Link>
          </li>
          <li className={router.pathname === "/portfolios" ? styles.menu : ""}>
            <Link href="/portfolios" onClick={closeMenu}>
              <TextNav
                label="WHERE TO BUY"
                isActive={router.pathname === "/portfolios"}
              />
            </Link>
          </li>
          <li className={router.pathname === "/blogs" ? styles.menu : ""}>
            <Link href="https://blog.techtiz.co " onClick={closeMenu}>
              <TextNav label="WARRANTY" isActive={router.pathname === "/blogs"} />
            </Link>
          </li>

          <li className={router.pathname === "/career" ? styles.menu : ""}>
            <Link href="/career" onClick={closeMenu}>
              <TextNav
                label="FAQ"
                isActive={router.pathname === "/career"}
              />
            </Link>
          </li>
          <li className={router.pathname === "/career" ? styles.menu : ""}>
            <Link href="/career" onClick={closeMenu}>
              <TextNav
                label="AWARDS"
                isActive={router.pathname === "/career"}
              />
            </Link>
          </li>
          <li className={router.pathname === "/career" ? styles.menu : ""}>
            <Link href="/career" onClick={closeMenu}>
              <TextNav
                label="NEWS & EVENT"
                isActive={router.pathname === "/career"}
              />
            </Link>
          </li>
          <li className={router.pathname === "/career" ? styles.menu : ""}>
            <Link href="/career" onClick={closeMenu}>
              <TextNav
                label="CONTACT US"
                isActive={router.pathname === "/career"}
              />
            </Link>
          </li>
        </ul>

        
        <div className={styles.hamburger} onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "white" }} />
          ) : (
            <FaBars size={25} style={{
              color: "white", position: 'absolute', right: 0, marginRight: 25,
              top: 20,
            }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
