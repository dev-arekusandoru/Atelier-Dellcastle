import { database, storage } from "./firebase.js";
import {
  ref,
  set,
  child,
  push,
  get
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import {
  uploadBytes,
  ref as sRef,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

export async function readData(path) {
  return await get(child(ref(database), path))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function generateGalleryPage(item) {
  let body = document.getElementById(`${item}-body`);
  let bodyData = await readData(item);
  let bodyBuild = ``;
  bodyData = bodyData ? Object.entries(bodyData) : {};
  bodyData.forEach((entry) => {
    let data = entry[1];
    console.log(data);
    if (data.hidden && data.hidden == true) return;
    bodyBuild += generateItem(
      data.name,
      data.details,
      data.image
        ? data.image
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/1920px-SMPTE_Color_Bars.svg.png"
    );
  });
  body.innerHTML = bodyBuild;
}

export async function writeItem(path, name, description, imgURL, featured) {
  console.log(name);
  let write = {
    name: name,
    details: description,
    image: imgURL,
    featured: featured
  };
  console.log("writeData", write);
  push(ref(database, path), write)
    .then(() => {
      alert("upload success");
    })
    .catch(() => {
      alert("insufficient permission");
    });
}

export async function uploadImage(path, file) {
  let newId = generateId();
  let storageRef = sRef(storage, path + "/" + newId);
  return await uploadBytes(storageRef, file).then((snapshot) => {
    console.log("file upload");
    return getDownloadURL(sRef(storage, path + "/" + newId)).then((url) => {
      console.log(url);
      return url;
    });
  });
}

export async function generateEditPage(path) {
  let data = await readData(path);
  let items = "";
  Object.entries(data).forEach((item) => {
    items += generateEditItem(
      item[0],
      item[1].name,
      item[1].details,
      item[1].image
        ? item[1].image
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/1920px-SMPTE_Color_Bars.svg.png",
      item[1].featured,
      item[1].hidden
    );
  });
  document.getElementById("edit-items").innerHTML = items;
}

export function generateId() {
  return push(ref(database)).key;
}
