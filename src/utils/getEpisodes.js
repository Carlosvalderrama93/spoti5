import config from "./auth/config";

export default async function getEpisodes(access_token) {
  let episodes;
  try {
    const endpoint = `${config.api_path}/me/episodes`;
    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    episodes = await response.json();
  } catch (e) {
    episodes = { error: e };
  }

  return episodes;
}
// user-read-playback-position
