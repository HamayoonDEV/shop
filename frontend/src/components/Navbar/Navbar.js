import React from "react";
import styles from "./Navbar.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className={styles.main}>
        <div className={styles.logo}>
          <h1>
            SH<span>OP</span>
          </h1>
        </div>
        {window.innerWidth < 600 ? (
          <>
            {/* mobile screen */}
            <div className={styles.hamberger} onClick={handleMenu}>
              {menu ? <ClearIcon /> : <MenuIcon />}
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className={styles.shop}>
              <span>shop</span>
            </div>
            <div className={styles.navbutton}>
              <span>Login</span>
              <span>Register</span>
              <span>
                Cart <ShoppingCartIcon />
                <span>0</span>
              </span>
            </div>
          </>
        )}
      </div>
      {/* mobile navbar section */}

      <div className={styles.mobilemain}>
        <div className={styles.navbarmain}>
          <div className={styles.logo}>
            <h1>
              SH<span>OP</span>
            </h1>
          </div>
          <div className={styles.ul}>
            <ul>
              <Link>
                <li>Shop</li>
              </Link>
              <Link>
                <li>Login</li>
              </Link>
              <Link>
                <li>Register</li>
              </Link>
              <Link>
                <li>
                  Cart <ShoppingCartIcon />
                  <span>0</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div
          className={menu ? `${styles.blankdiv}` : `${styles.close}`}
          onClick={handleMenu}
        ></div>
      </div>
    </>
  );
};

export default Navbar;
