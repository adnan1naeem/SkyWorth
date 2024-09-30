import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import styles from "../../styles/Navbar.module.css";
import TextNav from "../Texts/TextNav";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { Container, IconButton, InputAdornment, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
  const router = useRouter();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isArrowUp, setIsArrowUp] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(100);
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
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarHeight(80);
      } else {
        setNavbarHeight(100);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
    <div className={styles.header} style={{ height: `${navbarHeight}px`, transition: "height 0.3s ease", }}>
      <Container maxWidth='xl' sx={{ display: 'flex', justifyContent: { xs: "space-between", lg: 'space-between' }, alignItems: 'center' }}>
        <Link href="/">
          <Image
            className={styles.logo}
            src={require("../../assets/newlogo.svg")}
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
                <Link href="/product" onClick={closeMenu}>
                  ALL PRODUCTS
                </Link>
                <Link href="/product/3" onClick={closeMenu}>
                  QLED Mini
                </Link>
                <Link href="/product/5" onClick={closeMenu}>
                  QLED
                </Link>
                <Link href="/product/6" onClick={closeMenu}>
                  UHD
                </Link>
                <Link href="/product/11" onClick={closeMenu}>
                  FHD/HD
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
          <li className={router.pathname === "/news-events" ? styles.menu : ""}>
            <Link href="/news-events" onClick={closeMenu}>
              <TextNav
                label="NEWS & EVENT"
                isActive={router.pathname === "/news-events"}
              />
            </Link>
          </li>
          <li className={router.pathname === "/contactUs" ? styles.menu : ""}>
            <Link href="/contactUs" onClick={closeMenu}>
              <TextNav
                label="CONTACT US"
                isActive={router.pathname === "/contactUs"}
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
              <FaSearch fontSize={16} style={{ marginRight: 12, marginTop: 2 }} onClick={toggleSearch} />
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
                  top: navbarHeight==100?34:26,
                  transition: "height 0.3s ease",
                }}
              />
              <FaSearch
                size={24}
                style={{
                  color: "black",
                  position: "absolute",
                  right: 70,
                  marginRight: 0,
                  top: navbarHeight==100?34:26,
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
      </Container>
    </div>
  );
};

export default Navbar;
