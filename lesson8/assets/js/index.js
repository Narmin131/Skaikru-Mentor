let modeBtn = document.querySelector("button");
let darkMode = localStorage.getItem("DarkMode");
const enableDarkMode = () => {
  document.body.classList.add("dark");
  localStorage.setItem("DarkMode", "enable");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark");
  localStorage.setItem("DarkMode", null);
};

if (darkMode == "enable") {
  enableDarkMode();
}

const toggleMode = () => {
  let myDarkMode = localStorage.getItem("DarkMode");
  if (myDarkMode == "enable") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
};

modeBtn.addEventListener("click", toggleMode);
// modeBtn.onclick = ''

const fetchData = (a, b) => {
  fetch("")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.slice(a, b).map((element) => {});
    });
};
