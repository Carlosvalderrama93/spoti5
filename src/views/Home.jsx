import Reactfrom from "react";
import SquareCard from "../components/cards/CardSquare";
import cleanToken from "../utils/logout";

export default function Home() {
  return (
    <section className="home">
      <SquareCard />
      <h3 onClick={() => cleanToken()}>Logout</h3>
    </section>
  );
}
