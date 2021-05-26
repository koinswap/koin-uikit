import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 203 203" {...props}>
      <image width="203" height="203" href="/images/loading.gif" />
    </Svg>
  );
};

export default Icon;
