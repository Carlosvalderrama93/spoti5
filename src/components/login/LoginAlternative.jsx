import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import config from "../../utils/auth/config";
import getToken from "../../utils/getToken";
import { AuthState } from "../../utils/auth/AuthProvider";
import Button from "../Button";
import IconSpotify from "../icons/IconSpotify";

function handleClick() {
  const params = new URLSearchParams({
    client_id: config.client_id,
    response_type: config.response_type,
    redirect_uri: config.redirect_uri,
    code_challenge_method: "S256",
    show_dialog: config.show_dialog,
    scope: config.scopes,
  });
  window.location.href = `${config.base_path}/authorize/?${params}`;
}

export default function LoginAlternative() {
  const navigate = useNavigate();
  const location = useLocation();
  const authState = useContext(AuthState);

  const from = location.state?.from?.pathname || "/"; //Understand this line, I forget its functioning.
  const qParams = new URLSearchParams(location.search);
  const code = qParams.get("code");

  useEffect(() => {
    if (code) {
      (async (c) => {
        const token = await getToken(c);
        if (!token.error) {
          localStorage.setItem("token", JSON.stringify(token));
          authState.setUserToken(token, () => navigate(from));
        }
      })(code);
    }
  }, [code]);

  if (!code) {
    return (
      <Button onClick={handleClick} leftIcon={<IconSpotify />}>
        Continue with Spotify
      </Button>
    );
  }
}
