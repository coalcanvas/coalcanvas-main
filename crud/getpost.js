window.addEventListener("load", (e) => {
  console.log("data fetched from db:");
  const url = baseurl + "profiles";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      pageContents(data);
    });
});

// POST request
btn.addEventListener("click", (e) => {
  console.log("data sent to db:");
  e.preventDefault();
  const url = baseurl + "profiles";
  const body = {
    username: username.value,
    email: email.value,
    password: password.value,
    confirm_password: confirm_password.value,
  };
  const opts = {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  };
  console.log(opts);
  fetch(url, opts)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

function pageContents(data) {
  console.log(data);
}
