function decideAnimationOnLoad(
  pageBody,
  target,
  animationName,
  animationClass
) {
  if (typeof pageBody == "string") pageBody = document.getElementById(pageBody);

  if (pageBody.classList.contains("hidden")) {
    pageBody.classList.add("flex");
    pageBody.classList.remove("hidden");
  }

  if (localStorage.getItem("pageTarget") == target) {
    pageBody.classList.add(animationClass);
  }
  pageBody.addEventListener("animationend", (e) => {
    if (e.animationName == animationName) {
      localStorage.setItem("pageTarget", "");
      setTimeout(() => {
        homePageBody.classList.remove(animationClass);
      }, 100);
    }
  });
}

function fadePageIn(pageBodyId) {
  let pageBody = document.getElementById(pageBodyId);
  let target = pageBodyId.split("-")[0];
  let classes = pageBody.classList;

  if (target == "home") {
    classes.add("out-view");
    classes.remove("in-view");
    setTimeout(() => {
      classes.add("hidden");
    }, 700);
    console.log("homePage");
  } else if (classes.contains("out-view")) {
    classes.add("in-view");
    classes.remove("out-view");
  }
}
function fadePageOut(pageBodyId, target) {
  let pageBody = document.getElementById(pageBodyId);

  let classes = pageBody.classList;

  if (pageBodyId.split("-")[0] == "home") {
    classes.remove("hidden");
    setTimeout(() => {
      classes.add("in-view");
      classes.remove("out-view");
      wind;
    }, 25);
  } else if (classes.contains("in-view")) {
    classes.add("out-view");
    classes.remove("in-view");
  }
  if (target.length > 0) {
    setTimeout(() => {
      window.location.href = target;
    }, 500);
  }
}

function getCurrentURL() {
  let url = window.location.href;
  let urlSplit = url.split("#");

  if (urlSplit[1] && urlSplit[1].length != 0) {
    return urlSplit[1];
  }

  return "nada";
}

function changeGalleryPage(pageTo, collapseDropdown) {
  // get page info
  let pageFrom = localStorage.getItem("page"); // get current page id
  let from = document.getElementById(pageFrom); // get the page
  let to = document.getElementById(pageTo); // get the target page
  localStorage.setItem("page", pageTo); // store the target page as current

  //update tab display
  let currentTab = document.getElementById(pageFrom + "-tab");
  currentTab.classList.add("border-opacity-0");
  let newTab = document.getElementById(pageTo + "-tab");
  newTab.classList.remove("border-opacity-0");

  // update drop-down display
  let currentDrop = document.getElementById(pageFrom + "-drop");
  currentDrop.classList.remove("font-bold");
  let newDrop = document.getElementById(pageTo + "-drop");
  newDrop.classList.add("font-bold");

  if (collapseDropdown) {
    setTimeout(() => {
      document.getElementById("nav-drop-down").classList.remove("expanded");
      document.getElementById("nav-drop-down").classList.add("collapsed");
      document
        .getElementById("nav-hamburger-icon-bars")
        .classList.remove("opacity-0");
      document
        .getElementById("nav-hamburger-icon-x")
        .classList.add("opacity-0");
    }, 400);
  }

  from.classList.remove("in-view");
  from.classList.add("out-view");
  setTimeout(() => {
    to.classList.remove("out-view");
    to.classList.add("in-view");
  }, 200);
}
