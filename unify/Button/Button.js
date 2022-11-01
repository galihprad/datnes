import React from "react";
import st from "./Button.module.css";

export default function Button(props) {
  const { small, large, margin, filled, colors, handleClick, width } = props;

  const backgroundColor = filled ? colors : "";
  const border = filled ? "none" : `2px solid ${colors}`;
  const borderRadius = small ? "15px" : large ? "20px" : "25px";
  const color = filled ? "#fff" : colors;
  const fontSize = small ? "14px" : large ? "20px" : "16px";
  const height = small ? "30px" : large ? "50px" : "40px";
  const widths = width ? width : small ? "100px" : large ? "200px" : "150px";

  const style = {
    height,
    width: widths,
    borderRadius,
    margin,
    backgroundColor,
    border,
    color,
    fontSize,
    zIndex: 9999,
  };

  return (
    <div style={style} className={st.container} onClick={handleClick}>
      {props.children}
    </div>
  );
}

Button.defaultProps = {
  small: false,
  large: false,
  margin: 0,
  colors: "#7090b0",
  filled: false,
  handleClick: () => {},
};
