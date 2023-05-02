import React from "react";

import IconHome from "../icons/IconHome";
import IconSearch from "../icons/IconSearch";
import IconLibrary from "../icons/IconLibrary";
import IconAdd from "../icons/IconAdd";
import IconLiked from "../icons/IconLiked";
import IconEpisodes from "../icons/IconEpisodes";

export default function IconMenu({ type, clases }) {
  let svg;
  if (type === "home") {
    svg = <IconHome />;
  } else if (type === "search") {
    svg = <IconSearch />;
  } else if (type === "library") {
    svg = <IconLibrary />;
  } else if (type === "add") {
    svg = <IconAdd />;
  } else if (type === "liked") {
    svg = <IconLiked />;
  } else if (type === "episodes") {
    svg = <IconEpisodes />;
  }
  return <div className={`menu-icon ${clases}`}>{svg}</div>;
}
