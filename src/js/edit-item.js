const template = document.createElement("template");
template.innerHTML = `<div class="flex flex-col gap-3 border-2 border-offblack w-full p-2">
            <label class="flex flex-col leading-3" for="name"
              >Name:
              <input
                type="name"
                class="outline-none bg-offwhite border-b border-offblack"
              />
            </label>
            <label class="flex flex-col leading-3" for="description"
              >Description:
              <input
                type="description"
                class="outline-none bg-offwhite border-b border-offblack"
              />
            </label>
            <div
              id="img-container"
              class="hidden flex items-center justify-center w-full aspect-square border border-offblack"
            ></div>
            <div class="flex flex-row gap-2 justify-center">
              <input
                class="w-[49%] h-[30px] text-md border-2 border-[#0104002c] text-[#0104002c] hover:text-offwhite hover:bg-offblack hover:border-offblack hover:cursor-pointer transition-all duration-300 dark:text-[#fffbfc2c] dark:border-[#fffbfc2c] dark:hover:bg-[#fffbfc] dark:hover:border-[#fffbfc] dark:hover:text-[#010400]"
                type="submit"
                value="Show  Image"
                name="toggleimg"
                id="toggleimg"
              />
              <script>
                let toggleImg = document.getElementById("toggleimg");
                let imgContainer = document.getElementById("img-container");
                toggleImg.addEventListener("click", () => {
                  console.log('clicked');
                  if (imgContainer.classList.contains("hidden")) {
                    imgContainer.innerHTML = '<img src="https://picsum.photos/seed/${Math.random()}/500" alt="random image" class="object-cover w-full h-full" />';
                    imgContainer.classList.remove("hidden");
                    toggleImg.value = "Hide Image";
                  } else {
                    imgContainer.classList.add("hidden");
                    imgContainer.innerHTML = "";
                    toggleImg.value = "Show Image";
                  }
                });
              </script>
              <input
                class="w-[49%] h-[30px] text-md border-2 border-[#0104002c] text-[#0104002c] hover:text-offwhite hover:bg-offblack hover:border-offblack hover:cursor-pointer transition-all duration-300 dark:text-[#fffbfc2c] dark:border-[#fffbfc2c] dark:hover:bg-[#fffbfc] dark:hover:border-[#fffbfc] dark:hover:text-[#010400]"
                type="submit"
                value="Delete Image"
                name="deleteimg"
                id="deleteimg"
              />
            </div>

            <div class="flex flex-row gap-2 items-center">
              <div class="checkbox" id="commission-display">
                <div id="commission-display-inside-checkbox"></div>
                <input name="featured" id="commission" type="checkbox" />
              </div>
              <script>
                let featuredBox = document.getElementById("commission");
                let featuredDisplay =
                  document.getElementById("commission-display");

                featuredBox.addEventListener("change", (e) => {
                  if (featuredBox.checked) {
                    featuredDisplay.classList.add("check");
                  } else {
                    featuredDisplay.classList.remove("check");
                  }
                });
              </script>
              <label for="commission" class="cursor-pointer select-none"
                >Featured</label
              >
            </div>
            <div class="flex flex-row gap-2 items-center">
              <div class="checkbox" id="hidden-display">
                <div id="hidden-display-inside-checkbox"></div>
                <input name="hidden" id="hidden" type="checkbox" />
              </div>
              <script>
                let hiddenBox = document.getElementById("hidden");
                let hiddenDisplay = document.getElementById("hidden-display");

                hiddenBox.addEventListener("change", (e) => {
                  if (hiddenBox.checked) {
                    hiddenDisplay.classList.add("check");
                  } else {
                    hiddenDisplay.classList.remove("check");
                  }
                });
              </script>
              <label for="hidden" class="cursor-pointer select-none"
                >Hidden</label
              >
            </div>
            <div class="flex flex-row gap-2 justify-center">
              <input
                class="w-[49%] h-[30px] text-md border-2 border-[#0104002c] text-[#0104002c] hover:text-offwhite hover:bg-offblack hover:border-offblack hover:cursor-pointer transition-all duration-300 dark:text-[#fffbfc2c] dark:border-[#fffbfc2c] dark:hover:bg-[#fffbfc] dark:hover:border-[#fffbfc] dark:hover:text-[#010400]"
                type="submit"
                value="Reset"
                name="reset"
                id="reset"
              />
              <input
                class="w-[49%] h-[30px] text-md border-2 border-[#0104002c] text-[#0104002c] hover:text-offwhite hover:bg-offblack hover:border-offblack hover:cursor-pointer transition-all duration-300 dark:text-[#fffbfc2c] dark:border-[#fffbfc2c] dark:hover:bg-[#fffbfc] dark:hover:border-[#fffbfc] dark:hover:text-[#010400]"
                type="submit"
                value="Update"
                name="login"
                id="login"
              />
            </div>
          </div>`;

class EmployeeCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
  }

  connectedCallback() {
    this.h3 = this.getAttribute("name");
    this.render();
  }

  render() {
    this.h3;
  }
}
window.customElements.define("edit-item", EditItem);
