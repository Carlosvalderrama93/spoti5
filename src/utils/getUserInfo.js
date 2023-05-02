import config from "./auth/config";

export default async function getUserInfo(userId, access_token) {
  let userInfo;
  try {
    const endpoint = `${config.api_path}/users/${userId}`;
    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    userInfo = await response.json();
  } catch (e) {
    userInfo = { error: e };
  }

  return userInfo;
}
