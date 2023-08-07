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

async function readData(path) {
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

export async function writeItem(path, name, description, img, featured) {
  let imgURL = img ? await uploadImage(path, img) : "";

  console.log(imgURL);

  let write = {
    name: name,
    details: description,
    image: imgURL,
    featured: featured
  };

  console.log(write);
  push(ref(database, path), write)
    .then(() => {
      alert("upload success");
    })
    .catch(() => {
      alert("insufficient permission");
    });
}

async function uploadImage(path, file) {
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

export function generateId() {
  return push(ref(database)).key;
}
