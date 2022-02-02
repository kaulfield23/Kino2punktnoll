const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const name = document.getElementById("idUsername").value.toLowerCase();
  const password = document.getElementById("idPassword").value.toLowerCase();
  try {
    const response = await fetch(`/login/getUser`, {
      method: "POST",
      mode: "cors",
      credential: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(name + ":" + password),
      },
    });

    const data = await response.json();
    //save token in localStorage in web browser
    localStorage.setItem("token", data.token);

    if (response.status == 200) {
      alert(`Hi ${name}! Now you can leave reviews`);
      document.getElementById("idUsername").value = "";
      document.getElementById("idPassword").value = "";
    }
  } catch (error) {
    console.log(`Error. Try to log in again with proper id and password`);
  }
});
