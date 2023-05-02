import { useContext, useEffect, useState } from "react";
import Hero, { HeroLeft, HeroRight } from "../components/Hero"
import PlaylistCover from "../components/PlaylistCover";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import getLikedSongs from "../utils/getLikedSongs";
import { AuthState } from "../utils/auth/AuthProvider";
import getUserInfo from "../utils/getUserInfo";
import IconLiked from "../components/icons/IconLiked";
import PlaylistMetadata, { PlaylistMetadataUser } from "../components/PlaylistMetadata";
import TotalTracks from "../components/TotalTracks";
import Avatar from "../components/Avatar";
import Track from "../components/Track";
import Tracks from "../components/Tracks";


export default function LikedSongs(props) {
  const [songs, setSongs] = useState();
  const [userInfo, setUserInfo] = useState();

  const {
    token: { access_token },
    profile,
  } = useContext(AuthState);

  useEffect(() => {
    if (!access_token || !profile?.id) return;

    (async () => {
      const userInfo = await getUserInfo(profile.id, access_token);
      const songs = await getLikedSongs(access_token);

      setUserInfo(userInfo);
      setSongs(songs);
    })();
  }, [access_token, profile]);

  return songs ? <div class="w-100 f f-column">
    <Hero type="songs" className="hero">
      <HeroLeft>
        <PlaylistCover bg="linear-gradient(140deg, #7345f3 20%, #788a8a 80%)">
          <IconLiked class="" width="70" height="70" />
        </PlaylistCover>
      </HeroLeft>
      <HeroRight className="f f-column pt-large">
        <PlaylistMetadata>
          <Title className="fs-s">Playlist</Title>
          <Title className="fs-large mo0 mb1">Songs</Title>
          <PlaylistMetadataUser>
            <Avatar width="28" url={userInfo.images[0]?.url} alt={userInfo?.display_name} />
            <Link to="#" className="fc-base td-none">
              <Title className="di fs-s">{userInfo?.display_name}</Title>
            </Link>
            <span>•</span>
            <TotalTracks label="song" elements={songs} />
          </PlaylistMetadataUser>
        </PlaylistMetadata>
      </HeroRight>
    </Hero>
    <Tracks tracks={songs} />
  </div> : <div>loading..</div>
}