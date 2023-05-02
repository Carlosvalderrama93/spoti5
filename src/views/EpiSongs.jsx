import React, { useContext, useState, useEffect } from "react";
import getLikedSongs from "../utils/getLikedSongs";

import { AuthState } from "../utils/auth/AuthProvider";
import getUserInfo from "../utils/getUserInfo";
import Banner from "../components/Banner";
import getEpisodes from "../utils/getEpisodes";
import Track from "../components/Track";
import Episode from "../components/Episode";

export default function EpiTracks({ type, title }) {
  const [elements, setElements] = useState();
  const [userInfo, setUserInfo] = useState();

  const {
    token: { access_token },
    profile,
  } = useContext(AuthState);

  useEffect(() => {
    setElements();
    setUserInfo();
  }, [type]);

  useEffect(() => {
    if (!access_token || !profile?.id) return;

    (async () => {
      const userInfo = await getUserInfo(profile.id, access_token);

      if (type === "songs") {
        const tracks = await getLikedSongs(access_token);
        setUserInfo(userInfo);
        setElements(tracks);
      } else if (type === "episodes") {
        setUserInfo(userInfo);
        const episodes = await getEpisodes(access_token);
        setElements(episodes);
      }
    })();
  }, [access_token, profile, type]);

  return elements ? (
    <div className={type}>
      <Banner
        title={title}
        userImg={userInfo.images[0]?.url}
        username={userInfo.display_name}
        totalElements={elements?.total}
        type={type}
      />
      <section className="px-big" style={{ overflow: "auto", flex: 1 }}>
        {elements?.items[0]?.track ? (
          <div>
            <div className="px-xl dg dg-tc">
              <h3 className="fs-s fw-4 fw-4 fc-subdued">#</h3>
              <h3 className="fs-s fw-4 fc-subdued">Title</h3>
              <h3 className="fs-s fw-4 fc-subdued">Album</h3>
              <h3 className="fs-s fw-4 fc-subdued">Date</h3>
              <h3 className="fs-s fw-4 fc-subdued ta-e">🕒</h3>
            </div>
            <hr />
            {elements.items.map((item, i) => {
              return (
                <Track
                  key={item.track.id}
                  number={i}
                  img={item.track.album?.images[2].url}
                  song={item.track.name}
                  author={item.track.artists[0].name}
                  album={item.track.album.name}
                  date={item.added_at}
                  time={item.track.duration_ms}
                />
              );
            })}
          </div>
        ) : (
          <div>
            <Episode />
            {elements.items.map((item, i) => (
              <p key={i}>{item.episode.name}</p>
            ))}
          </div>
        )}
      </section>
    </div>
  ) : (
    <div>loading..</div>
  );
}
