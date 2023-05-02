import { Routes, Route } from "react-router-dom";

import Browser from "./components/browser/Browser";
import Login from "./components/login/Login";
import Home from "./views/Home";
import AuthProvider from "./utils/auth/AuthProvider";
import EpiSongs from "./views/EpiSongs";
import Tracks from "./components/Track";
import LikedSongs from "./views/LikedSongs";
import Episodes from "./views/Episodes";

export default function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Routes>
          <Route element={<Browser />}>
            <Route path="/" element={<Home />} />
            <Route path="settings" element={<h1>Settings Page</h1>} />
            <Route path="search" element={<h1>In progress... </h1>} />
            <Route path="collection" element={<div>Your Library</div>} />
            <Route path="collection/tracks" element={<LikedSongs />} />
            <Route
              path="collection/episodes"
              element={<Episodes />}
            />
            <Route path="playlist/id" element={<div>New Playlist</div>} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}
