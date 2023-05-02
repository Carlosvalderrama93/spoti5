import Track from "./Track";

export default function Tracks(props) {
  const { tracks } = props

  return <section className="px-big" style={{ overflow: "auto", flex: 1 }}>
    <div className="px-xl dg dg-tc">
      <h3 className="fs-s fw-4 fw-4 fc-subdued">#</h3>
      <h3 className="fs-s fw-4 fc-subdued">Title</h3>
      <h3 className="fs-s fw-4 fc-subdued">Album</h3>
      <h3 className="fs-s fw-4 fc-subdued">Date</h3>
      <h3 className="fs-s fw-4 fc-subdued ta-e">🕒</h3>
    </div>
    <hr />
    {tracks.items.map((item, i) => {
      const { track, added_at } = item
      return (
        <Track number={i + 1} key={track.id} data={track} date={added_at} />
      );
    })}
  </section>
}