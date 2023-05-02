export default function TotalTracks(props) {
  const { elements, label } = props
  let res = `${elements.total} `
  res += elements.total === 1 ? label : label


  return <span>{res}</span>
}