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

function changeGalleryPage(pageTo, collapseDropdown) {
  toggleModal("off");
  // get page info
  let pageFrom = localStorage.getItem("page"); // get current page id
  let from = document.getElementById(pageFrom); // get the page
  let to = document.getElementById(pageTo); // get the target page
  localStorage.setItem("page", pageTo); // store the target page as current

  //update tab display
  let currentTab = document.getElementById(pageFrom + "-tab");
  currentTab.classList.add("border-opacity-0", "dark:border-opacity-0");
  let newTab = document.getElementById(pageTo + "-tab");
  newTab.classList.remove("border-opacity-0", "dark:border-opacity-0");

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

  // change classes
  from.classList.remove("in-view");
  from.classList.add("out-view");
  setTimeout(() => {
    to.classList.remove("hidden");
    setTimeout(() => {
      to.classList.remove("out-view");
      to.classList.add("in-view", "flex");
      setTimeout(() => {
        from.classList.add("hidden");
      }, 110);
    }, 200);
  }, 50);
}

function toggleModal(direction, title, text, img) {
  let modal = document.getElementById("modal");
  let classes = modal.classList;
  if (direction == "off") {
    classes.remove("in-view");
    classes.add("out-view");
    setTimeout(() => {
      classes.remove("flex");
      classes.add("hidden");
    }, 310);
  } else if (direction == "on") {
    classes.remove("hidden");
    classes.add("flex");
    setTimeout(() => {
      classes.remove("out-view");
      classes.add("in-view");
    }, 310);
  }

  if (title) {
    modal.innerHTML = `
    <div class="flex flex-row justify-between items-center w-full h-[30px] ">
      <i
        class="fa-solid fa-xmark fa-xl opacity-0"
      ></i>
      <h6 class="bold text-3xl font-bold">${title}</h6>
      <i
        id="modal-x"
        onclick="toggleModal('off')"
        class="fa-solid fa-xmark fa-xl justify-self-start text-offblack dark:text-offwhite transition-opacity duration-300 hover:cursor-pointer"
      ></i>
    </div>
    <div 
    class="flex flex-col justify-start items-center w-full h-full mt-3">
      <img class="w-[90%] max-h-[80%] border border-offblack" src="${img}" alt="" />
      <p class="mt-2 text-xl">${text}</p>
      
    </div>
    `;
  }
}

function generateItem(title, text, img) {
  return `<div class="item">
            <img class="item-img" onmouseup="toggleModal('on', '${title}', '${text}', '${img}')" src="${img}" alt="" />
            <h2 class="item-name">${title}</h2>
            <h6 class="item-type">${text}</h6>
          </div>`;
}

function generateItems(numOfItems) {
  let result = "";
  for (let i = 0; i < numOfItems; i++) {
    result += generateItem("title", "text", "");
  }
  return result;
}
