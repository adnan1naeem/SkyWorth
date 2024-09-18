import React from "react";
import Styles from "../../styles/TextNav.module.css";
import { Typography } from "@mui/material";

function TextNav({ label, isActive, color }) {
  return (
    <div className={Styles.TextNav}>
      <span
        className={Styles.textNavLabel}
        style={{ color: isActive ? '#18B0E6' : color, fontFamily: "'Mont-Regular', sans-serif", }}
      >
        {label}
      </span>
    </div>
  );
}

export default TextNav;
