import config from "./auth/config";

export default async function getToken(code) {
  let token = null;
  const body = {
    code,
    grant_type: "authorization_code",
    redirect_uri: config.redirect_uri,
    client_id: config.client_id,
    code_verifier: config.code_verifier,
  };

  try {
    const response = await fetch(`${config.base_path}/api/token`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${config.auth_base_64}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(body),
    });

    token = await response.json();
  } catch (e) {
    // What is 'e'? error or something more?
    debugger;
    console.log("e is:", e);
    token = { error: e };
  }

  return token;
}
