import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import getUserInfo from "../utils/getUserInfo";
import getEpisodes from "../utils/getEpisodes";

import Hero, { HeroLeft, HeroRight } from "../components/Hero"
import Title from "../components/Title";
import IconEpisodes from "../components/icons/IconEpisodes";
import { AuthState } from "../utils/auth/AuthProvider";
import PlaylistCover from "../components/PlaylistCover";
import TotalTracks from "../components/TotalTracks";
import PlaylistMetadata, { PlaylistMetadataUser } from "../components/PlaylistMetadata";
import Avatar from "../components/Avatar";
import Episode from "../components/Episode";

export default function Episodes() {
  const [elements, setElements] = useState();
  const [userInfo, setUserInfo] = useState();

  const {
    token: { access_token },
    profile,
  } = useContext(AuthState);

  useEffect(() => {
    if (!access_token || !profile?.id) return;

    (async () => {
      const userInfo = await getUserInfo(profile.id, access_token);
      const episodes = await getEpisodes(access_token);

      setUserInfo(userInfo);
      setElements(episodes);
    })();
  }, [access_token, profile]);

  return elements ? <div className="w-100 f f-column">
    <Hero type="episodes" className="hero">
      <HeroLeft>
        <PlaylistCover bg="#056952">
          <IconEpisodes class="" width="70" height="70" />
        </PlaylistCover>
      </HeroLeft>
      <HeroRight>
        <PlaylistMetadata user={userInfo} tracks={elements}>
          <Title className="fs-s">Playlist</Title>
          <Title className="fs-large mo0 mb1">Episodes</Title>
          <PlaylistMetadataUser>
            <Avatar width="28" url={userInfo.images[0]?.url} alt={userInfo?.display_name} />
            <Link to="#" className="fc-base td-none">
              <Title className="di fs-s">{userInfo?.display_name}</Title>
            </Link>
            <span>•</span>
            <TotalTracks label="episode" elements={elements} />
          </PlaylistMetadataUser>
        </PlaylistMetadata>
      </HeroRight>
    </Hero>
    <Episode />
  </div> : <div>loading...</div>
}