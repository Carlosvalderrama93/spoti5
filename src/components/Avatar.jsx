import IconAvatar from "./icons/IconAvatar"

export default function Avatar(props) {
  const { url, alt, width = 25, } = props
  return <span style={{ width: `${width}px`, height: `${width}px` }} className="inline-flex items-center jc-c br-100 bc-elevated-base">
    {url ? <img src={url} alt={alt} /> : <IconAvatar />}
  </span>
}