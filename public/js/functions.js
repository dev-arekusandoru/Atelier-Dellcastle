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
