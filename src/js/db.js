import { database, storage } from "./firebase.js";
import {
  getDatabase,
  ref,
  set,
  child,
  push,
  get,
  onValue
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

function readData(path) {
  let promise = new Promise((resolve) => {
    get(child(ref(database), path))
      .then((snapshot) => {
        if (snapshot.exists()) {
          resolve(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return promise.then((value) => {
    return value;
  });
}

function generateGalleryPage(item) {
  let body = document.getElementById(`${item}-body`);
  let bodyData = readData(item);
  let bodyBuild = ``;
  bodyData.then((result) => {
    bodyData = Object.entries(result);
    bodyData.forEach((entry) => {
      let data = entry[1];
      console.log(data);
      bodyBuild += generateItem(
        data.name,
        data.details,
        data.image ? data.image : ""
      );
    });
    body.innerHTML = bodyBuild;
  });
}
generateGalleryPage("boards");

function writeItem(path, name, description, url, featured) {
  let write = {
    name: name,
    details: description,
    image: url,
    featured: featured
  };

  console.log(write);
  push(ref(database, path), write);
  alert("upload success");
}

// watch upload button and submit
let upload = document.getElementById("upload");
upload?.addEventListener("mouseup", () => {
  let category = document.getElementById("category");
  let name = document.getElementById("name");
  let description = document.getElementById("description");
  let img = document.getElementById("img");
  let featured = document.getElementById("commission");

  if (
    confirm(
      `Confirm your entry: \nCategory: ${category.value}\nName: ${
        name.value
      }\nDescription: ${description.value}\nURL: ${img.value}\nFeatured: ${
        featured.checked ? "yes" : "no"
      }`
    )
  ) {
    writeItem(
      category.value,
      name.value,
      description.value,
      img.value,
      featured.checked
    );
    name.value = "";
    description.value = "";
    img.value = "";
    featured.checked ? featured.click() : null;
  } else {
    console.log("canceled");
  }
});
