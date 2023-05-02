import { createContext, useState } from "react";

export const AuthState = createContext({});

function findToken() {
  try {
    return JSON.parse(localStorage.getItem("token"));
  } catch {
    return false;
  }
}

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(findToken());
  const [profile, setProfile] = useState(null);

  function setUserToken(token, cb) {
    setToken(token);
    cb();
  }

  function setUserProfile(profile, cb = () => {}) {
    setProfile(profile);
    cb();
  }

  const data = { token, setUserToken, profile, setUserProfile };
  return <AuthState.Provider value={data}>{children}</AuthState.Provider>;
}
