import React from "react";
import Styles from "../../styles/TextNav.module.css";
import { Typography } from "@mui/material";

function TextNav({ label, isActive, color }) {
  return (
    <div className={Styles.TextNav}>
     <span
        className={`${Styles.textNavLabel} ${isActive ? Styles.active : ''}`}
        style={{ color: color, fontFamily: "'Mont-Regular', sans-serif", fontWeight: 500, fontSize: '14px' }}
      >
        {label}
      </span>
    </div>
  );
}

export default TextNav;
