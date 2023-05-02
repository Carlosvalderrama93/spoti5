import { Link } from "react-router-dom";
import Title from "./Title";

export default function PlaylistMetadata(props) {
  const { user, tracks } = props
  return <div className="pt-huge">
    {props.children}
  </div>
}

export function PlaylistMetadataArtists(props) {
  if (!props.artists) return null

  slicedArtists = props.artists.slice(0, 3)
  artists = slicedArtists.map(a => <a href="#">a.name</a>)
  artists.push(<div>and more</div>)

  return props.artists ? <div>
    {artists}
  </div> : null
}

export function PlaylistMetadataUser(props) {
  return <div className="mt-big dg gg-10 gtc-auto items-center">
    {props.children}
  </div>
}