import React from "react";
import Title from "./Title";
import IconLiked from "./icons/IconLiked";
import IconEpisodes from "./icons/IconEpisodes";

function Banner(props) {
  const { title, username, totalElements, userImg, type } = props;
  return (
    <>
      <div className={`banner banner-${type}`}>
        <div className={`banner-image banner-image-${type}`}>
          {type == "songs" ? (
            <IconLiked width="70" height="70" />
          ) : type == "episodes" ? (
            <IconEpisodes width="70" height="70" color="#fff" />
          ) : (
            "Loading..."
          )}
        </div>

        <div className="banner-info">
          <Title className="fs-s">Playlist</Title>
          <Title className="fs-large mo0 mb1">{title}</Title>
          <div className="banner-info-user">
            <img
              className="banner-info-user-img"
              src={userImg}
              alt="user-profile-image"
            />
            <Title className="fs-s banner-info-user-name">{username}</Title>
            <span>•</span>
            {totalElements ? (
              <p className="fs-s banner-info-user-songs">
                {totalElements} {type}{" "}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
// https://github.com/bradtraversy/50projects50days
