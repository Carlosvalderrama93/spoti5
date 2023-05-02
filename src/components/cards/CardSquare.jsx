import React from "react";

import PlayButton from "./PlayButton";
import Title from "../Title";
import CardSubtitle from "./CardSubtitle";

export default function SquareCard() {
  return (
    <section className="square-card">
      <div className="square-card-cover">
        <div className="square-card-cover-button">
          <PlayButton />
        </div>
      </div>
      <div className="square-card-info">
        <Title name="Teorías de conspiración" className="title-1" />
        <CardSubtitle subtitle="Spotify Studios" />
      </div>
    </section>
  );
}
