import React from "react";

export default function CardProgress({ progress }) {
  return (
    <div className="indicator-progress">
      <div
        className="indicator-progress-played"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
