import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Title from "../Title";
import MenuIcons from "./MenuIcons";
import getPlaylists from "../../utils/getPlaylists";
import { AuthState } from "../../utils/auth/AuthProvider";
import SpotifyLogo from "../icons/SpotifyLogo";

export default function Menu() {
  const [playlists, setPlaylist] = useState([]);
  const {
    token: { access_token },
    profile,
  } = useContext(AuthState);

  useEffect(() => {
    (async () => {
      if (!profile) return;

      const playlists = await getPlaylists(profile.id, access_token);
      setPlaylist(playlists?.items ?? []);
    })();
  }, [profile]);

  return (
    <div className="pt-xxl menu">
      <div className="px-xxl menu-logo">
        <SpotifyLogo />
      </div>
      <nav>
        <NavLink to="/" className="px-xxl menu-item menu-item-hover  td-none">
          <MenuIcons type="home" />
          <Title className="title-2">Home</Title>
        </NavLink>
        <NavLink to="/search" className="px-xxl menu-item td-none">
          <MenuIcons type="search" />
          <Title className="title-2">Search</Title>
        </NavLink>
        <NavLink to="collection" className="px-xxl mb-xxl menu-item td-none">
          <MenuIcons type="library" />
          <Title className="title-2">Your Library</Title>
        </NavLink>
        <NavLink to="playlist/id" className="px-xxl menu-item menu-item-hover  td-none">
          <MenuIcons type="add" clases="grey menu-icon-background" />
          <Title className="title-2">Create Playlist</Title>
        </NavLink>
        <NavLink
          to="collection/tracks"
          className="px-xxl menu-item menu-item-hover  td-none"
        >
          <MenuIcons type="liked" clases="blue menu-icon-background" />
          <Title className="title-2">Liked Songs</Title>
        </NavLink>
        <NavLink
          to="collection/episodes"
          className="px-xxl menu-item menu-item-hover  td-none"
        >
          <MenuIcons type="episodes" clases="green menu-icon-background" />
          <Title className="title-2">Your Episodes</Title>
        </NavLink>
        <NavLink to="premium" className="px-xxl menu-item td-none">
          <MenuIcons type="home" />
          <Title className="title-2">Premium</Title>
          <MenuIcons type="home" />
        </NavLink>
      </nav>
      <hr />
      {playlists.map((playlist) => (
        <div className="px-xxl my-base" style={{height:24}} key={playlist.name}>
          <a href="#" className="fc-subdued td-none fs-s">{playlist.name}</a>
        </div>
      ))}
    </div>
  );
}
