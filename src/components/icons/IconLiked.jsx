import React from "react";
import Icon from "./Icon";
export default function IconLiked(props) {
  const { width = 16, height = 16 } = props;
  return (
    <Icon height={height} width={width} viewBox="0 0 16 16" color="#fff">
      <path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path>
    </Icon>
  );
}