import React, { useContext, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import Menu from "../menu/Menu";
import { AuthState } from "../../utils/auth/AuthProvider";
import getProfile from "../../utils/getProfile";

export default function Browser() {
  const { token, setUserProfile, profile } = useContext(AuthState);
  const location = useLocation();

  useEffect(() => {
    if (profile || !token?.access_token) return;
    const userProfile = getProfile(token.access_token);
    setUserProfile(userProfile);
  }, [profile]);

  if (!token) {
    return <Navigate to="login" state={{ from: location }} />;
  }

  return (
    <div className="browser">
      <div className="top">
        <Menu />
        <Outlet />
      </div>
      <div className="bottom">
        <div>Player in progress...</div>
      </div>
    </div>
  );
}
