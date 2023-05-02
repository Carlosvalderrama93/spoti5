function cleanToken() {
  window.localStorage.removeItem("token");
  window.location.reload();
}

export default cleanToken;
