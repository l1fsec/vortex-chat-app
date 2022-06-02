export const logout = () => {
  localStorage.clear();
  window.location.pathname = "/login";
};
// clear local storage after logging out and push them to /login
