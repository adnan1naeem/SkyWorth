import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import styles from "../../styles/Navbar.module.css";
import TextNav from "../Texts/TextNav";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
  const router = useRouter();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isArrowUp, setIsArrowUp] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const handleCloseClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            className={styles.logo}
            src={require("../../assets/logo.svg")}
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
          <li className={router.pathname === "/" ? styles.menu : ""}>
            <Link href="/" onClick={closeHomeMenu}>
              <TextNav label="HOME" isActive={router.pathname === "/"} />
            </Link>
          </li>
          <div className={styles.dropdown}>
            <li
              style={{ display: "flex" }}
              className={styles.dropbtn}
              onClick={toggleDropdown}
            >
              <TextNav label="PRODUCT" />
            </li>
            {isWideScreen && (
              <div className={styles["dropdown-content"]}>
                <Link href="/mobile-application" onClick={closeMenu}>
                ALL PRODUCTS
                </Link>
                <Link href="/website" onClick={closeMenu}>
                TELEVISION
                </Link>
                <Link href="/ui-ux-design" onClick={closeMenu}>
                  FREEZER
                </Link>
                <Link href="/sqa" onClick={closeMenu}>
                  AIR CONDITIONER
                </Link>
              </div>
            )}
            {!isWideScreen && isDropdownOpen && (
              <ul style={{ paddingLeft: "10px" }}>
                <li
                  className={
                    router.pathname === "/mobile-application"
                      ? styles.menu
                      : styles.drop
                  }
                >
                  <Link href="/mobile-application" onClick={closeMenu}>
                    <TextNav label="ALL PRODUCTS" />
                  </Link>
                </li>
                <li
                  className={
                    router.pathname === "/website" ? styles.menu : styles.drop
                  }
                >
                  <Link href="/website" onClick={closeMenu}>
                    <TextNav label="TELEVISION" />
                  </Link>
                </li>
                <li
                  className={
                    router.pathname === "/ui-ux-design"
                      ? styles.menu
                      : styles.drop
                  }
                >
                  <Link href="/ui-ux-design" onClick={closeMenu}>
                    <TextNav label="FREEZER" />
                  </Link>
                </li>
                <li
                  className={
                    router.pathname === "/SQA" ? styles.menu : styles.drop
                  }
                >
                  <Link href="/sqa" onClick={closeMenu}>
                    <TextNav label="AIR CONDITIONER" />
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <li className={router.pathname === "/aboutUs" ? styles.menu : ""}>
            <Link href="/aboutUs" onClick={closeMenu}>
              <TextNav
                label="ABOUT US"
                isActive={router.pathname === "/aboutUs"}
              />
            </Link>
          </li>
          <li className={router.pathname === "/whereToBuy" ? styles.menu : ""}>
            <Link href="/whereToBuy" onClick={closeMenu}>
              <TextNav
                label="WHERE TO BUY"
                isActive={router.pathname === "/whereToBuy"}
              />
            </Link>
          </li>
          <li className={router.pathname === "/WarrentyPolicy" ? styles.menu : ""}>
            <Link href="/WarrentyPolicy" onClick={closeMenu}>
              <TextNav
                label="WARRANTY"
                isActive={router.pathname === "/WarrentyPolicy"}
              />
            </Link>
          </li>

          <li className={router.pathname === "/faq" ? styles.menu : ""}>
            <Link href="/faq" onClick={closeMenu}>
              <TextNav label="FAQ" isActive={router.pathname === "/faq"} />
            </Link>
          </li>
          <li className={router.pathname === "/award" ? styles.menu : ""}>
            <Link href="/award" onClick={closeMenu}>
              <TextNav
                label="AWARDS"
                isActive={router.pathname === "/award"}
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
                isActive={router.pathname === "/award"}
              />
            </Link>
          </li>
          <li className={styles.searchIcon}>
            <FaSearch fontSize={16} onClick={toggleSearch} />
          </li>
        </ul>

        <div className={styles.hamburger} >
          {click ? (
          <>
            <FaSearch fontSize={16} style={{marginRight:12,marginTop:2}} onClick={toggleSearch} />
            <FaTimes size={20} style={{ color: "black" }} onClick={handleClick} />
            </>
          ) : (
            <>
              <FaBars onClick={handleClick}
                size={25}
                style={{
                  color: "black",
                  position: "absolute",
                  right: 0,
                  marginRight: 25,
                  top: 20,
                }}
              />
              <FaSearch
                size={24}
                style={{
                  color: "black",
                  position: "absolute",
                  right: 70,
                  marginRight: 0,
                  top: 20,
                }} onClick={toggleSearch} /> </>
          )}
        </div>
        {isSearchOpen && <div className={styles.blurBackground} />}
        {isSearchOpen && (
          <div className={styles.searchContainer}>
            <TextField
              id="standard-basic"
              label="Search"
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={handleCloseClick}
                      aria-label="close"
                      sx={{ backgroundColor: '#9c9a9a20', height: 35, width: 35, marginRight: '2px', marginBottom: '15px' }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                alignSelf: 'center',
                width: '70%',
                borderRadius: '8px',
                fontSize: '16px',
                '& .MuiInput-underline:before': {
                  borderBottom: '2px solid #ccc',
                },
                '& .MuiInput-underline:after': {
                  borderBottom: '2px solid #000',
                },
                '& .MuiInput-underline:hover:before': {
                  borderBottom: '2px solid #000',
                },
              }}
            />
            <p className={styles.searchBottomText}>Hit enter to search or ESC to close</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
