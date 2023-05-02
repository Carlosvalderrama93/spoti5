import React from "react";
import Icon from "./Icon";

export default function IconEpisodes(props) {
  const { width = 16, height = 16 } = props;
  return (
    <Icon height={height} width={width} viewBox="0 0 16 16" color="#1ed760">
      <path d="M3.75 0A1.75 1.75 0 0 0 2 1.75v12.952c0 1.051 1.22 1.633 2.037.972l3.962-3.208 3.943 3.204c.817.663 2.038.082 2.038-.97V1.75A1.75 1.75 0 0 0 12.23 0H3.75z"></path>
    </Icon>
  );
}
