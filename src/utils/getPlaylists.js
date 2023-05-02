import config from "../utils/auth/config";

export default async function getPlaylists(userId, access_token) {
  let playlists;

  try {
    const endpoint = `${config.api_path}/users/${userId}/playlists`;
    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    playlists = await response.json();
  } catch (e) {
    playlists = { error: e };
  }

  return playlists;
}
