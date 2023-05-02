import React from "react";
import dayjs from "dayjs"

function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60)
  let minutes = Math.floor((duration / (1000 * 60)) % 60)
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  seconds = (seconds < 10) ? "0" + seconds : seconds;

  let result = ""
  if (hours) {
    result += `${hours}:`
  } else if (minutes) {
    result += `${minutes}:`
  }

  result += seconds
  return result
}

function Image(props) {
  const { size = [], images, alt, ...rest } = props
  let image = images.find(image => image.height === size)

  if (!image && size.length) image = images[images.length - 1]
  else return null



  return <img src={image.url} alt={alt} {...rest} />
}

function Author(props) {
  const { name } = props

  return <a className="fc-subdued td-none" href="#">
    {name}{`, `}
  </a>
}

function Artists(props) {
  const { artists = [] } = props
  const artistssSliced = artists.slice(0, 3)

  return <h3 className="fs-s fw-4 my-none">
    {artistssSliced.map(artists => {
      return <Author name={artists?.name} />
    })}
  </h3>
}

export default function Track(props) {
  const { date, data, number } = props;
  const { name, duration_ms, artists, album } = data;

  const formattedDate = dayjs(date).format("MMM D, YYYY")
  const timeFormatted = msToTime(duration_ms)

  return (
    <article className="px-xl dg gg dg-tc ai-c" style={{ height: 56 }}>
      <p className="fs-base fc-subdued">
        {number}
      </p>
      <div className="df ai-c" >
        <Image alt={album?.name} size="64" images={album?.images} width="40" height="40" />
        <div className="df df-fd-c ai-sa ml-xl">
          <h2 className="fs-base fw-4 my-none">
            <a className="fc-base td-none" href="#">
              {name}
            </a>
          </h2>
          <Artists artists={artists} />
        </div>
      </div>
      <h3 className="fs-s fw-4 fc-subdued">
        <a className="fc-subdued td-none" href="#">
          {album?.name}
        </a>
      </h3>
      <h3 className="fs-s fw-4 fc-subdued">{formattedDate}</h3>
      <div className=" df ai-c jc-sb">
        <div>💚</div>
        <p className="fs-s fw-4 fc-subdued">{timeFormatted}</p>
      </div>
    </article>
  );
}
