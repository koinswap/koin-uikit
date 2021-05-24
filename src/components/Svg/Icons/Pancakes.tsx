import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 270 270" {...props}>
      <image width="270" height="270" href="/images/logo.png" />
    </Svg>
  );
};

export default Icon;
