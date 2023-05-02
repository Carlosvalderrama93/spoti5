import config from "./auth/config";

export default async function getLikedSongs(access_token) {
  let tracks;
  try {
    const endpoint = `${config.api_path}/me/tracks`;
    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    tracks = await response.json();
  } catch (e) {
    tracks = { error: e };
  }

  return tracks;
}
