const logoutBtn = document.querySelector("#logout");
logoutBtn.addEventListener("click", async (ev) => {
  ev.preventDefault();
  try {
    const response = await fetch(`/login/logout`);
    if (response.status == 200) {
      alert(`You just logged out!`);
      localStorage.removeItem("token");
    }
  } catch (error) {
    console.log(error);
  }
});
