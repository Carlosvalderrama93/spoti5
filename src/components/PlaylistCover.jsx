export default function PlaylistCover(props) {
  return <div className="hero-icon f items-center jc-c" style={{ background: props.bg }}>
    {props.children}
  </div>
}