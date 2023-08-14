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
  if (target?.length > 0) {
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

function checkbox(id, text, checked) {
  return `<div class="flex flex-row gap-2 items-center">
              <div class="${
                checked ? "checked-outside" : ""
              } flex items-center justify-center w-[20px] h-[20px] border-[#0104002c] border-2 transition-all duration-300" id="${id}-outside-checkbox">
                <div class="${
                  checked ? "checked-inside" : ""
                } w-[14px] h-[14px] bg-offwhite rounded-[2px] transition-all duration-300" id="${id}-inside-checkbox"></div>
                <input name="${id}-checkbox" id="${id}-checkbox" class="absolute w-[20px] h-[20px] opacity-0" type="checkbox" ${
                  checked ? "checked" : ""
                } onclick="toggleCheckbox('${id}')" />
              </div>
              <label for="${id}-checkbox" class="cursor-pointer select-none"
                >${text}</label
              >
            </div>`;
}

function generateEditItem(id, name, description, img, featured, hidden) {
  return `<div class="flex flex-col gap-3 border-2 border-offblack w-full p-2">
            <label class="flex flex-col" for="${id}-name"
              >Name:
              <input
                id="${id}-name"
                type="${id}-name"
                value="${name}"
                class="outline-none bg-offwhite border-b border-offblack"
              />
            </label>
            <label class="flex flex-col" for="${id}-description"
              >Description:
              <input
                id="${id}-desc"
                type="${id}-description"
                value="${description}"
                class="outline-none bg-offwhite border-b border-offblack"
              />
            </label>
            <div
              id="${id}-img-container"
              class="hidden flex items-center justify-center w-full aspect-square border border-offblack"
            ></div>
            <div class="flex flex-row gap-2 justify-center">
              <input
                class="w-[49%] h-[30px] text-md border-2 border-[#0104002c] text-[#0104002c] hover:text-offwhite hover:bg-offblack hover:border-offblack hover:cursor-pointer transition-all duration-300 dark:text-[#fffbfc2c] dark:border-[#fffbfc2c] dark:hover:bg-[#fffbfc] dark:hover:border-[#fffbfc] dark:hover:text-[#010400]"
                type="submit"
                value="Show Image"
                name="${id}-toggleimg"
                id="${id}-toggleimg"
                onclick="toggleImg('${id}', '${img}')"
              />
              <input
                class="w-[49%] h-[30px] text-md border-2 border-[#0104002c] text-[#0104002c] hover:text-offwhite hover:bg-offblack hover:border-offblack hover:cursor-pointer transition-all duration-300 dark:text-[#fffbfc2c] dark:border-[#fffbfc2c] dark:hover:bg-[#fffbfc] dark:hover:border-[#fffbfc] dark:hover:text-[#010400]"
                type="submit"
                value="Delete Image"
                name="${id}-deleteimg"
                id="${id}-deleteimg"
                onclick="deleteImg('${id}')"
              />
            </div>
            ${checkbox(id, "Featured", featured)}
            ${checkbox(id + "-hide", "Hidden", hidden)}
            <div class="flex flex-row gap-2 justify-center">
              <input
                class="w-[49%] h-[30px] text-md border-2 border-[#0104002c] text-[#0104002c] hover:text-offwhite hover:bg-offblack hover:border-offblack hover:cursor-pointer transition-all duration-300 dark:text-[#fffbfc2c] dark:border-[#fffbfc2c] dark:hover:bg-[#fffbfc] dark:hover:border-[#fffbfc] dark:hover:text-[#010400]"
                type="submit"
                value="Reset"
                name="${id}-reset"
                id="${id}-reset"
              />
              <input
                class="w-[49%] h-[30px] text-md border-2 border-[#0104002c] text-[#0104002c] hover:text-offwhite hover:bg-offblack hover:border-offblack hover:cursor-pointer transition-all duration-300 dark:text-[#fffbfc2c] dark:border-[#fffbfc2c] dark:hover:bg-[#fffbfc] dark:hover:border-[#fffbfc] dark:hover:text-[#010400]"
                type="submit"
                value="Update"
                name="${id}-update"
                id="${id}-update"
              />
            </div>
          </div>`;
}

function toggleCheckbox(id) {
  let checkbox = document.getElementById(`${id}-checkbox`);
  let outside = document.getElementById(`${id}-outside-checkbox`);
  let inside = document.getElementById(`${id}-inside-checkbox`);
  if (checkbox.checked) {
    outside.classList.add("checked-outside");
    inside.classList.add("checked-inside");
  } else {
    outside.classList.remove("checked-outside");
    inside.classList.remove("checked-inside");
  }
}

function toggleImg(id, img) {
  let toggleImg = document.getElementById(`${id}-toggleimg`);
  let imgContainer = document.getElementById(`${id}-img-container`);
  if (imgContainer.classList.contains("hidden")) {
    imgContainer.innerHTML = `<img src="${img}" alt="random image" class="object-cover w-full h-full" />`;
    imgContainer.classList.remove("hidden");
    toggleImg.value = "Hide Image";
  } else {
    imgContainer.classList.add("hidden");
    imgContainer.innerHTML = "";
    toggleImg.value = "Show Image";
  }
}
