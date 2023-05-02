import React from "react";

export default function Cards ({ Card, title }) {
  return (
    <>
      <section className="square-cards">
        <h1>{title}</h1>
        {[""].map((e) => (
          <Card />
        ))}
      </section>
    </>
  );
};

