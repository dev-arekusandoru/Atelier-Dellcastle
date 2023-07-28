import { database, storage } from "./firebase.js";
import {
  getDatabase,
  ref,
  set,
  child,
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

function writeData(path, object) {
  set(ref(database, path), object);
}
