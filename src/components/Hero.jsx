import React from "react";
import Title from "./Title";
import IconLiked from "./icons/IconLiked";
import IconEpisodes from "./icons/IconEpisodes";

export default function Hero(props) {
  const { type } = props;
  return (
    <div className={`hero hero-${type} f pt-large px-xxl pb-xxl`}>
      {props.children}
    </div>
  );
}
// https://github.com/bradtraversy/50projects50days

export function HeroLeft(props) {
  return <div className="mr-xxl">
    {props.children}
  </div>
}

export function HeroRight(props) {
  return <div style={{ flex: 1 }}>
    {props.children}
  </div>
}
