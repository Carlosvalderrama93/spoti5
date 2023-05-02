import CardProgress from "./CardProgress";
import Title from "../Title";
import PlayButton from "./PlayButton";

export default function CardHorizontal() {
  return (
    <div className="card-horizontal">
      <div className="card-horizontal-img"></div>
      <div className="card-horizontal-info">
        <div className="card-horizontal-info-left">
          <Title name="Salsa" className="title-1" />
          <CardProgress progress="10" />
        </div>
        <PlayButton />
      </div>
    </div>
  );
}
